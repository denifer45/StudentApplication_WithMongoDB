const User = require("../models/User");
const generateOTP = require("../utils/generateOTP");
const jwt = require("jsonwebtoken");

exports.sendOTP = async (req, res) => {
 const { phone } = req.body;

 const otp = generateOTP();

 const user = await User.findOneAndUpdate(
  { phone },
  {
   otp,
   otpExpires: Date.now() + 5 * 60 * 1000
  },
  { upsert: true, new: true }
 );

 console.log("OTP:", otp);

 res.json({ message: "OTP sent" });
};

exports.verifyOTP = async (req, res) => {
 const { phone, otp } = req.body;

 const user = await User.findOne({ phone });

 if (!user || user.otp != otp) {
  return res.status(400).json({ message: "Invalid OTP" });
 }

 const token = jwt.sign({ id: user._id }, "secretkey");

 res.json({ token, user });
};
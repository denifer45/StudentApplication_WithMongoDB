const User = require("../models/User");
const generateOTP = require("../utils/generateOTP");
const jwt = require("jsonwebtoken");

exports.sendOTP = async (req, res) => {
  try {
    const { phone, name } = req.body;

    if (!phone || !name) {
      return res.status(400).json({ message: "Name and phone are required" });
    }

    const otp = generateOTP();

    const user = await User.findOneAndUpdate(
      { phone },
      {
        name,
        otp,
        otpExpires: Date.now() + 5 * 60 * 1000,
      },
      { upsert: true, new: true }
    );

    console.log("OTP:", otp);

    res.json({ message: "OTP sent" });
  } catch (err) {
    console.error("SEND OTP ERROR 👉", err);
    res.status(500).json({ message: err.message });
  }
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
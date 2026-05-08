import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // 🔴 validation errors
  const [errors, setErrors] = useState({});

  // ✅ SEND OTP
  const sendOTP = async () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      await axios.post("http://localhost:4071/api/auth/send-otp", {
        name,
        phone,
      });

      setStep(2);
      setErrors({});
    } catch (err) {
      setErrors({
        api: err.response?.data?.message || "Failed to send OTP",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ VERIFY OTP
  const verifyOTP = async () => {
    let newErrors = {};

    if (!otp.trim()) newErrors.otp = "OTP is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4071/api/auth/verify-otp",
        { phone, otp }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setErrors({
        api: err.response?.data?.message || "Invalid OTP",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:text-blue-300 transition z-10"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/95 shadow-2xl rounded-2xl p-8 w-full max-w-md z-10"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Student Login
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Access your account securely
        </p>

        {/* 🔴 API ERROR */}
        {errors.api && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errors.api}
          </p>
        )}

        {step === 1 && (
          <>
            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg mb-1 focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-3">{errors.name}</p>
            )}

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg mb-1 focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mb-3">{errors.phone}</p>
            )}

            <button
              onClick={sendOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-sm text-gray-500 text-center mb-3">
              Welcome, <span className="font-medium">{name}</span>
            </p>

            {/* OTP */}
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 border rounded-lg mb-1 focus:ring-2 focus:ring-green-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {errors.otp && (
              <p className="text-red-500 text-sm mb-3">{errors.otp}</p>
            )}

            <button
              onClick={verifyOTP}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={() => setStep(1)}
              className="mt-4 text-sm text-gray-500 hover:text-blue-600 block mx-auto"
            >
              Change details
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
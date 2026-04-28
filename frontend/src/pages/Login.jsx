// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
 const [phone, setPhone] = useState("");
 const [otp, setOtp] = useState("");
 const [step, setStep] = useState(1);

 const sendOTP = async () => {
  await axios.post("http://localhost:4071/api/auth/send-otp", { phone });
  setStep(2);
 };

 const verifyOTP = async () => {
  const res = await axios.post("http://localhost:4071/api/auth/verify-otp", {
   phone,
   otp
  });

  localStorage.setItem("token", res.data.token);
  alert("Login success");
 };

 return (
  <div>
   <h2>Login</h2>

   {step === 1 && (
    <>
     <input value={phone} onChange={(e) => setPhone(e.target.value)} />
     <button onClick={sendOTP}>Send OTP</button>
    </>
   )}

   {step === 2 && (
    <>
     <input value={otp} onChange={(e) => setOtp(e.target.value)} />
     <button onClick={verifyOTP}>Verify OTP</button>
    </>
   )}
  </div>
 );
};

export default Login;
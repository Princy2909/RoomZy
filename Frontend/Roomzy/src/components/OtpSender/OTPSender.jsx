import React, { useState, useRef } from "react";
import "./OTPSender.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants"; // Ensure this points correctly

const OtpSender = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0 && !otp[index]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/verify-otp`, {
        otp: enteredOtp,
      });

      alert("OTP Verified Successfully!");
      navigate("/body");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="otp-modal">
      <div className="otp-card">
        <h2 className="otp-msg">Enter OTP</h2>
        <p className="otp-msg">We've sent an OTP to your email.</p>
        <div className="otp-box-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="otp-box"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button onClick={handleVerify} className="otp-button">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpSender;

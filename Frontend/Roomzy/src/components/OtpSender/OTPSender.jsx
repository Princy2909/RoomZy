import { useState, useRef } from "react";
import "./OTPSender.css"; // Import CSS file

const OtpSender = ({ onClose }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    if (value.length > 1) return; // Prevent multiple digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if filled
    if (value && index < 5) {
      setTimeout(() => inputRefs.current[index + 1]?.focus(), 50);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        setTimeout(() => inputRefs.current[index - 1]?.focus(), 50);
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      alert("OTP Verified Successfully!");
      window.location.reload();
    } else {
      alert("Please enter a valid 6-digit OTP");
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
              disabled={index > 0 && otp[index - 1] === ""}
            />
          ))}
        </div>
        <button onClick={handleVerify} className="otp-button">
          Verify OTP
        </button>
        <button className="close-modal" onClick={onClose}>Back</button>
      </div>
    </div>
  );
};

export default OtpSender;

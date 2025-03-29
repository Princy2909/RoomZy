import React, { useState } from 'react';
import './ForgotPassword.css';
import OtpSender from '../OtpSender/OTPSender'; // Import OtpSender component

const ForgotPassword = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showOtp, setShowOtp] = useState(false); // State to show OTP input

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Requesting OTP for:', email);
        setMessage(`An OTP has been sent to ${email}.`);
        setShowOtp(true); // Show OTP input
    };

    return (
        <div className="forgot-password-container">
            {!showOtp ? ( // Show this part if OTP is not requested yet
                <>
                    <h2>Forgot Password</h2>
                    <p>Enter your email to receive an OTP.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit">Get OTP</button>
                    </form>
                    {message && <p className="success-message">{message}</p>}
                    <button className="close-modal" onClick={onClose}>Back to log in</button>
                </>
            ) : (
                <OtpSender onClose={() => setShowOtp(false)} />// Show OTP input when button is clicked
            )}
        </div>
    );
};

export default ForgotPassword;

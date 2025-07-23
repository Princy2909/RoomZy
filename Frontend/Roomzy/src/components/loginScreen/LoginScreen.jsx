import React, { useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import './LoginScreen.css';
import loginImage from '../../assets/account.png';
import ForgotPasswordModal from '../forgotPassword/ForgotPasswordModal';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleForgotPasswordClick = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, {
                email,
                password,
            });

            const { token } = response.data;
            localStorage.setItem("authToken", token);
            alert("Login successful!");
            navigate("/body"); // ✅ redirect after login
        } catch (err) {
            console.error(err);
            const message = err.response?.data?.error || err.message || "Login failed";
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="modal">
                <img src={loginImage} alt="Logo" className="modal-logo" />
                <h2>Sign In</h2>
                <p>Welcome back! Please enter your details</p>

                {error && <p className="error">{error}</p>}

                <form className="form-container" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <div className="checkbox-container">
                        <label>
                            <input type="checkbox" disabled={loading} />
                            Remember Me
                        </label>
                        <a href="#" onClick={handleForgotPasswordClick} className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Signing in..." : "Sign in"}
                    </button>

                    <div className="">
                        <p>Don't have an account?
                            <span
                                onClick={() => navigate("/signup")}
                                className="signup-link"
                                style={{ cursor: "pointer", color: "blue", marginLeft: "5px" }}
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                </form>
            </div>

            <ForgotPasswordModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default LoginScreen;

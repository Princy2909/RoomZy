const authService = require("../services/authService");

const signup = async (req, res) => {
  try {
    const response = await authService.signup(req.body);
    res.cookie("token",response?.token,{httpOnly:true, maxAge:600000}); // changed
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const {otp,email} = req.body;
    // const email=req?.user?.email;
   
    const response = await authService.verifyOTP(email, otp);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    res.cookie("token",response?.token,{httpOnly:true, maxAge:600000});
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const response = await authService.forgotPassword(req.body.email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const response = await authService.resetPassword(email, otp, newPassword);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, verifyOTP, login, forgotPassword, resetPassword };

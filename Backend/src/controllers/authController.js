const authService = require("../services/authService");
const { userTokenAuth } = require("../middlewares/auth");

const signup = async (req, res) => {
  try {
    
    const response = await authService.signup(req.body);
    res.status(201).json(response);
  } catch (error) {
     console.log("hiii");
    res.status(400).json({ error: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
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
    
    res.cookie("token",response.token);
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

const listroom =  async (req, res) => {
  try {
    return authService.addNewRoom(req, res); // Pass the res object to addroom
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const edit_room =  async (req, res) => {
  try {
    return authService.editRoom(req, res); // Pass the res object to edit_roomInfo
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { signup, verifyOTP, login, forgotPassword, resetPassword ,listroom,edit_room};

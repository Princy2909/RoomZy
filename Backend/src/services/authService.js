const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/user-repository");
const { sendEmail } = require("../utils/sendEmail");


const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();
const signup = async (userData) => {
  const existingUser = await UserRepository.findByEmail(userData.email);
  if (existingUser) throw new Error("User already exists");

  userData.password = await bcrypt.hash(userData.password, 10);
  const otp = generateOTP();

  const newUser = await UserRepository.createUser({ ...userData, otp, otpExpires: Date.now() + 5 * 60 * 1000 });

  await sendEmail(newUser.email, "Verify Your Email", `Your OTP: ${otp}`);

  return { message: "User registered successfully. Please verify your email with the OTP sent to your email." };
};

// Verify OTP
const verifyOTP = async (email, otp) => {
  const user = await UserRepository.findByOTP(email, otp);
  if (!user) throw new Error("Invalid or expired OTP");

  await UserRepository.updateUser(email, { isVerified: true, otp: undefined, otpExpires: undefined });

  return { message: "Email verified successfully" };
};

// Login
const login = async (email, password) => {
  const user = await UserRepository.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  if (!user.isVerified) throw new Error("Please verify your email first");

  return { token: generateToken(user) };
};

// Forgot Password (send OTP)
const forgotPassword = async (email) => {
  const user = await UserRepository.findByEmail(email);
  if (!user) throw new Error("User not found");

  const otp = generateOTP();
  await UserRepository.updateUser(email, { otp, otpExpires: Date.now() + 5 * 60 * 1000 });

  await sendEmail(user.email, "Reset Password OTP", `Your OTP: ${otp}`);

  return { message: "Password reset OTP sent to your email" };
};

// Reset Password (using OTP)
const resetPassword = async (email, otp, newPassword) => {
  const user = await UserRepository.findByOTP(email, otp);
  if (!user) throw new Error("Invalid or expired OTP");

  user.password = await bcrypt.hash(newPassword, 10);
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  return { message: "Password reset successful" };
};



module.exports = { signup, verifyOTP, login, forgotPassword, resetPassword};

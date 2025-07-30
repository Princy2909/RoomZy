const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const {validateToken} =require("../middleware2/auth");

router.post("/signup",authController.signup);
router.post("/verify-otp",authController.verifyOTP);
router.post("/login",authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;

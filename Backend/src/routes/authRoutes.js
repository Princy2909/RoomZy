const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// const {listroom,edit_room} = require("../repositories/owner-repository");
const { userTokenAuth } = require("../middlewares/auth");
const cookieParser= require("cookie-parser");

// router.use(express.json()); 
router.use(cookieParser());
router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOTP);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/owner/listroom",userTokenAuth,authController.listroom);
router.post("/owner/edit_room/:room_id",userTokenAuth,authController.edit_room);


module.exports = router;

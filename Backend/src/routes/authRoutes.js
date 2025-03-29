const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const roomController = require("../controllers/roomController");

const { userTokenAuth } = require("../middlewares/auth");
const cookieParser= require("cookie-parser");

// router.use(express.json()); 
router.use(cookieParser());
router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOTP);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/owner/listroom",userTokenAuth,roomController.listroom);
router.post("/owner/edit_room/:room_id",userTokenAuth,roomController.edit_room);
router.post("/owner/roomfeed",roomController.room_feed);

module.exports = router;

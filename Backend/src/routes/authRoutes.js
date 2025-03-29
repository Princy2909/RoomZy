const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const roomController = require("../controllers/roomController");

<<<<<<< HEAD
const { userTokenAuth } = require("../middlewares/auth");
const cookieParser= require("cookie-parser");

// router.use(express.json()); 
router.use(cookieParser());
=======
>>>>>>> 0715b8dbf30f4f3c16d7b4b97a4a51dfeb14d911
router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOTP);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
<<<<<<< HEAD
router.post("/owner/listroom",userTokenAuth,roomController.listroom);
router.post("/owner/edit_room/:room_id",userTokenAuth,roomController.edit_room);
router.post("/owner/roomfeed",roomController.room_feed);
=======
>>>>>>> 0715b8dbf30f4f3c16d7b4b97a4a51dfeb14d911

module.exports = router;

const Owner = require("../models/OwnerModel");
const roomService= require("../services/roomService");
const { userTokenAuth } = require("../middlewares/auth");

const listroom =  async (req, res) => {
    try {
      return roomService.addNewRoom(req, res); // Pass the res object to addroom
    } catch (err) {
      res.status(400).json(err.message);
    }
  };
  
  const edit_room =  async (req, res) => {
    try {
      return roomService.editRoom(req, res); // Pass the res object to edit_roomInfo
    } catch (err) {
      res.status(400).json(err.message);
    }
  };

  //  feed api
  const room_feed= async(req, res)=>{
    try{
    return roomService.room_feed(req,res);
    }catch(err){
      res.status(400).send(err.message);
    }

  }

  module.exports = {listroom,edit_room,room_feed};
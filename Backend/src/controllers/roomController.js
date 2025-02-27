const roomService= require("../services/roomService");


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

  module.exports = {listroom,edit_room};
const {addroom,edit_roomInfo} = require("../repositories/owner-repository");

const addNewRoom=async(req,res)=>{
    return addroom(req,res);
  }
  
  const editRoom=async(req,res)=>{
    return edit_roomInfo(req,res);
  }

  module.exports = { addNewRoom,editRoom};
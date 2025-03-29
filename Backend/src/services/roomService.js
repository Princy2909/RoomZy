const Owner = require("../models/OwnerModel");
const {addroom,edit_roomInfo} = require("../repositories/owner-repository");

const addNewRoom=async(req,res)=>{
    return addroom(req,res);
  }
  
  const editRoom=async(req,res)=>{
    return edit_roomInfo(req,res);
  }

  function suffleArray(arr){          // suffle function to randomise response
    let n= arr.length;
    for(let i=n-1;i>=0;i--){
      let j=Math.floor(Math.random()* (i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
  }

  function feedFlat(arr){           // flattening the array
    let n=arr.length;
    let feed= new Set();
    for(let i=0;i<n;i++){
      let m=arr[i].length;
      for(let j=0;j<m;j++){
        feed.add(arr[i][j]);
      }
    }
    return Array.from(feed);
  }

  const room_feed= async(req, res)=>{
      try{
      let feed = await Owner.find();
      if(feed.length===0) res.send("No Room Found");
      feed=feed.map((r)=>r.roomDetails);
      feed=feedFlat(feed);
      feed=suffleArray(feed);    //suffle room array we got
      res.status(200).json(feed);
      }catch(err){
        res.status(400).send(err.message);
      }
    }

  module.exports = { addNewRoom,editRoom,room_feed};
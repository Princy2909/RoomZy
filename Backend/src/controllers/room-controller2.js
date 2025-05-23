const roommodel = require("../models/roommodel");
const roomService2= require("../services/room-service2");

//post review
const postReview= async(req,res)=>{
    try{
        const {roomId}=req.params;
        const reviewData= req.body;
        const response=await roomService2.postReview(roomId, reviewData);
        res.status(201).json(response);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

// editing review
const editReview=async(req,res)=>{
    try{
    const {roomId,reviewId}=req.params;
    const updateData=req.body.review;
    const response=await roomService2.editReview(roomId,reviewId,updateData);
    res.status(200).json(response);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

//delete review
const deleteReview=async(req,res)=>{
    try{
        const {roomId,reviewId}=req.params;
        const response=await roomService2.deleteReview(roomId,reviewId);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

// get all review of a room
const getAllReviews=async(req,res)=>{
    try{
        const {roomId}=req.params;
        const response=await roomService2.getAllReviews(roomId);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({error: err.message});
    }
    
    


}

module.exports={postReview,editReview,deleteReview,getAllReviews};
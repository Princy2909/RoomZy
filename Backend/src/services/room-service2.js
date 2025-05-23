const roomRepositiory2=require("../repositories/room-repository2");

// add review
const postReview= async (roomId,reviewData)=>{
    return await roomRepositiory2.addReview(roomId,reviewData);
}

// edit review
const editReview= async(roomId,reviewId,updateData)=>{
    return await roomRepositiory2.editReview(roomId,reviewId,updateData);
}

// delete review
const deleteReview = async (roomId, reviewId) => {
  return await roomRepositiory2.deleteReview(roomId, reviewId);
};

// get al review of a room 
const getAllReviews= async(roomId)=>{
    return await roomRepositiory2.getAllReviews(roomId);
}

module.exports={postReview,editReview,deleteReview,getAllReviews};
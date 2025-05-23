const roomModel=require("../models/roommodel.js");

// add Review to a room
const addReview=async(roomId,reviewData)=>{

    const room=await roomModel.findById(roomId);
    if(!room) throw new Error("Room Not found");

    const review = {
      userId: reviewData.userId,
      roomId: roomId,
      comment:reviewData.comment,
      rating:reviewData.rating
    };

    room.reviews.push(review);

    await room.save();
    return {message: "Review added successfully", review: reviewData}
}

// edit review
const editReview = async (roomId, reviewId, updateData) => {
  const room = await roomModel.findById(roomId);
  if (!room) throw new Error("Room not found");

  const review = room.reviews.id(reviewId);
  if (!review) throw new Error("Review not found");

  // Apply updates
  if (updateData.comment !== undefined) review.comment = updateData.comment;
  if (updateData.rating !== undefined) review.rating = updateData.rating;

  // Save the parent document
  await room.save();

  return { message: "Review updated successfully", review };
};

// delete review
const deleteReview = async (roomId, reviewId) => {
  const room = await roomModel.findById(roomId);
  if (!room) throw new Error("Room not found");
   const review = room.reviews.id(reviewId);
  if (!review) throw new Error("Review not found");

  // Use pull to remove subdocument
  room.reviews.pull(reviewId);
  await room.save();
  return { message: "Review deleted successfully" };
};

// getting all review of a room
const getAllReviews=async (roomId)=>{
    const room=await roomModel.findById(roomId).populate("reviews");
    if(!room) throw new Error("Room not found");
    return room.reviews;
}

module.exports= {addReview,editReview,deleteReview,getAllReviews}
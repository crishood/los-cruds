const { Schema, model } = require("mongoose");
const titleRegex = new RegExp("[a-zA-Z]");
const commentRegex = new RegExp("[a-zA-Z0-9]");

const reviewSchema = new Schema(
    {
      title: {
          type: String,
          required: true,
          maxlength: 20,
          match: [titleRegex, "Invalid characters"]
      },
        comment:  {
            type: String,
            required: true,
            maxlength: 50,
            match: [commentRegex, "Invalid characters"]
        },
        score: {
            type: Number,
            required: true,
            min: [1, "The minimun calification is 1"],
            max: [5, "The maximun calification is 5"]
        }
    },
    {
      timestamps: true,
    }
  );
    
  const Review = model("Review", reviewSchema);
  
  module.exports = Review;
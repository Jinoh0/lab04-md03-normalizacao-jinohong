const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  owner: {
    type: String,
    default: "Anonymous",
    maxLength: 55,
  },

  score: {
    type: Number,
    min: 0,
    max: 10,
  },

  comments: {
    type: String,
    maxLength: 144,
    minLength: 32,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  car: { type: mongoose.Types.ObjectId, ref: "Car" },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;

const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const carSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
  },

  model: {
    type: String,
    required: true,
    trim: true,
  },

  type: {
    type: String,
    enum: ["Suv", "Sedan", "Truck", "Sport", "Exotic", "Hatchback"],
    required: true,
  },

  reviews:[{type: mongoose.Types.ObjectId , ref: "Review"}],
});

const CarModel = model("Car",carSchema);

module.exports = CarModel;
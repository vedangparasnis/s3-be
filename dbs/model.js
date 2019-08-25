const mongoose = require("mongoose");

const shema = new mongoose.Schema({
  hotel_name: {
    type: String,
    required: true,
    trim: true
  },
  hotel_price: {
    type: Number,
    required: true,
    trim: false
  },
  Date: {
    type: String,
    required: false,
    default: Date.now()
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
});

const model = mongoose.model("hotels", shema);

module.exports = model;

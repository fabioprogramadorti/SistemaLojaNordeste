const mongoose = require('mongoose')

// Create Schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  quantities: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Product = mongoose.model('producties', ProductSchema)
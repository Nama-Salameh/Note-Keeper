const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creationDate: { 
    type: Date, 
    required: true,
    default: Date.now
 },
});

module.exports = mongoose.model('note', noteSchema)

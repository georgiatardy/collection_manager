const mongoose = require('mongoose');

// get a reference to Schema
const Schema = mongoose.Schema;

// ==== Create a schema for art collection ==== //
const artSchema = new Schema({
  title: { type: String, required: true },
  medium: { type: String },
  genre: { type: String },
  yearMade: { type: Number, required: true },
  // custom: { type: Boolean, required: true },
  // materials: [],
  description: {
    colorScheme: { type: String },
    content: { type: String },
    // shape: { type: String },
  }
});

// create a model for a Contact
const Item = mongoose.model('Item', artSchema);

module.exports = Item;















// const mongoose = require('mongoose');
//
//
// const artSchema = mongoose.Schema({
//     title: { type: String, required: true, unique: true },
//     yearMade: Number,
//     medium: String,
//     description: [{
//         materials: { type: Number, required: true, default: 1 },
//         measure: { type: String, lowercase: true, trim: true },
//         dimensions: { type: Number, required: true }
//     }],
//     genre: [String],
//     source: {type: String}
// })
//
// const artWork = mongoose.model('artWork', artSchema);
//
// module.exports = artWork;

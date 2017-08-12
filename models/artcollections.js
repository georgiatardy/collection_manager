const mongoose = require('mongoose');


const artSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    yearMade: Number,
    medium: String,
    description: [{
        materials: { type: Number, required: true, default: 1 },
        measure: { type: String, lowercase: true, trim: true },
        dimensions: { type: Number, required: true }
    }],
    genre: [String],
    source: {type: String}
})

const artWork = mongoose.model('artWork', artSchema);

module.exports = artWork;

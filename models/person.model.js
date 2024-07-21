const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { type: String,
    required: [true, "Title is required"],
    minLength: [2, "Title must contain 2 characters"]},

    lastName: { type: String,
    required: [true, "Body is required"],
    maxLength: [255, "Body must contain max of 255 characters"]},

}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);

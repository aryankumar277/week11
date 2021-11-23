const mongoose = require("mongoose")

const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
    name: String,
    regno: Number,
    marks: {
        type: Number,
        max: 50,
        min: 0
    }
});

module.exports = mongoose.model("student", studentSchema, "Students");
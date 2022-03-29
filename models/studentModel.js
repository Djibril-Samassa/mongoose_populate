const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    firstname: String,
    surname: String,
    address: [{ type: mongoose.Types.ObjectId, ref: "Adress"}]
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
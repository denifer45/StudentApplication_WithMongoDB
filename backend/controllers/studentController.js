// // controllers/studentController.js
// const Student = require("../models/Student");

// // CREATE
// exports.createStudent = async (req, res) => {
//  try {
//   const student = await Student.create(req.body);
//   res.status(201).json(student);
//  } catch (err) {
//   res.status(400).json({ message: err.message });
//  }
// };

// // GET ALL
// exports.getStudents = async (req, res) => {
//  try {
//   const students = await Student.find().sort({ createdAt: -1 });
//   res.json(students);
//  } catch (err) {
//   res.status(500).json({ message: err.message });
//  }
// };

// // UPDATE
// exports.updateStudent = async (req, res) => {
//  try {
//   const student = await Student.findByIdAndUpdate(
//    req.params.id,
//    req.body,
//    { new: true }
//   );
//   res.json(student);
//  } catch (err) {
//   res.status(400).json({ message: err.message });
//  }
// };

// // DELETE
// exports.deleteStudent = async (req, res) => {
//  try {
//   await Student.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted successfully" });
//  } catch (err) {
//   res.status(500).json({ message: err.message });
//  }
// };



const Student = require("../models/Student");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const saved = await newStudent.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
};
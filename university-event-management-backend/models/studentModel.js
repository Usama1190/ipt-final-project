import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    gender: { type: String, required: true },
    studentEmail: { type: String, required: true, unique: true },
    departName: { type: String, required: true },
    seatNo: { type: Number, required: true, unique: true },
    shift: { type: String, required: true },
    role: { type: String, default: "candidate" },
  },
  { timestamps: true }
);

const Student = mongoose.model(
  "Student",
  studentSchema
);

export default Student;

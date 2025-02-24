import mongoose from "mongoose";

const studentRegisterSchema = mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    studentEmail: { type: String, required: true, unique: true },
    departName: { type: String, required: true },
    seatNo: { type: Number, required: true, unique: true },
    shift: { type: String, required: true },
    semester: { type: Number, required: true },
    role: { type: String, default: 'student' },
}, { timestamps: true });

const StudentRegister = mongoose.model('StudentRegister', studentRegisterSchema);

export default StudentRegister;

import mongoose from "mongoose";

const eventAppSchema = mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    studentEmail: { type: String, required: true, unique: true },
    departName: { type: String, required: true },
    seatNo: { type: Number, required: true, unique: true },
    shift: { type: String, required: true },
    eventName: { type: String, required: true },
    status: { type: Boolean, default: false }
}, { timestamps: true });

const EventApp = mongoose.model('EventApp', eventAppSchema);

export default EventApp;

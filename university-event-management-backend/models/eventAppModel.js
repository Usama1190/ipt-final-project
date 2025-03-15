import mongoose from "mongoose";

const eventAppSchema = mongoose.Schema({
    studentEmail: { type: String, required: true, unique: true },
    seatNo: { type: Number, required: true, unique: true },
    eventName: { type: String, required: true },
    status: { type: Boolean, default: false }
}, { timestamps: true });

const EventApp = mongoose.model('EventApp', eventAppSchema);

export default EventApp;

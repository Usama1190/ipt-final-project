import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    departName: { type: String, required: true },
    eventName: { type: String, required: true },
    shift: { type: String, required: true },
    eventDate: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventVenue: { type: String, required: true },
    eventCost: { type: Number, required: true },
    costType: { type: String, required: true },
    dueDate: { type: Date, required: true },
    date: { type: Date, required: true },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
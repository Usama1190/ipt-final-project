import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    departName: { type: String, required: true },
    eName: { type: String, required: true },
    shift: { type: String, required: true },
    eDate: { type: Date, required: true },
    eTime: { type: String, required: true },
    eVenue: { type: String, required: true },
    eCost: { type: Number, required: true },
    costType: { type: String, required: true },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
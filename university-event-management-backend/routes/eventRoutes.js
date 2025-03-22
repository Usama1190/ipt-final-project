import { createEventCon, deleteEventCon, getEventByIdCon, getEventCon, updateEventCon, updateItemOnEvent } from "../controllers/eventCon.js";
import express from "express";

const eventRoute = express.Router();

// Get Events

eventRoute.get("/events", getEventCon);

// Get Single Events

eventRoute.get("/events/:id", getEventByIdCon);

// Post Events

eventRoute.post("/events/create-event", createEventCon);

// Delete Events

eventRoute.delete("/events/delete-event/:id", deleteEventCon);

// Put Events

eventRoute.put("/events/update-event/:id", updateEventCon);

// Patch Events

eventRoute.patch("/events/update-item-event/:id", updateItemOnEvent);

export default eventRoute;

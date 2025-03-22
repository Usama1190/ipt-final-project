import {
  createEventAppCon,
  deleteEventAppCon,
  getEventAppByIdCon,
  getEventAppsCon,
  updateEventAppCon,
  updateItemOnEventCon,
} from "../controllers/eventAppCon.js";
import express from "express";

const eventAppRoute = express.Router();

// Get Events Application

eventAppRoute.get("/eventapps", getEventAppsCon);

// Get Single Event Application

eventAppRoute.get("/eventapps/:id", getEventAppByIdCon);

// Post Event Application

eventAppRoute.post("/eventapps/create-eventapp", createEventAppCon);

// Delete Event Application

eventAppRoute.delete("/eventapps/delete-eventapp/:id", deleteEventAppCon);

// Put Event Application

eventAppRoute.put("/eventapps/update-eventapp/:id", updateEventAppCon);

// Patch Event Application

eventAppRoute.patch(
  "/eventapps/update-item-eventapp/:id",
  updateItemOnEventCon
);

export default eventAppRoute;

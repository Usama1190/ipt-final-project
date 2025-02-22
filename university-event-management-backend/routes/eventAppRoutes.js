import express from "express";
import EventApp from "../models/eventAppModel.js";
import enums from "../constant/enums.js";

const eventAppRoute = express.Router();

// Get Events Application

eventAppRoute.get("/eventapps", async (req, res) => {
  try {
    const getAllEvents = await EventApp.find();
    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getAllEvents,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Get Single Event Application

eventAppRoute.get("/eventapps/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleEvents = await EventApp.findById(id);

    if (!getSingleEvents) {
      res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getSingleEvents,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Post Event Application

eventAppRoute.post("/eventapps/create-eventapp", async (req, res) => {
  try {
    const data = req.body;
    const createEvent = await EventApp.create(data);

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_POST_DATA,
      data: createEvent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_POST_DATA });
  }
});

// Delete Event Application

eventAppRoute.delete("/eventapps/delete-eventapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await EventApp.findByIdAndDelete(id);

    if (!deleteEvent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_DELETE_DATA,
      data: deleteEvent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_DELETE_DATA });
  }
});

// Put Event Application

eventAppRoute.put("/eventapps/update-eventapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateEvent = await EventApp.findByIdAndUpdate(data, id);

    if (!updateEvent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PUT_DATA,
      data: updateEvent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PUT_DATA });
  }
});

// Patch Event Application

eventAppRoute.patch("/eventapps/update-item-eventapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateItemOnEvent = await EventApp.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updateItemOnEvent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PATCH_DATA,
      data: updateItemOnEvent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PATCH_DATA });
  }
});

export default eventAppRoute;

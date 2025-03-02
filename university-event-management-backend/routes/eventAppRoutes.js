import express from "express";
import EventApp from "../models/eventAppModel.js";
import enums from "../constant/enums.js";

const eventAppRoute = express.Router();

// Get Events Application

eventAppRoute.get("/eventapps", async (req, res) => {
  try {
    const getAllEventApps = await EventApp.find();
    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getAllEventApps,
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
    const getSingleEventApp = await EventApp.findById(id);

    if (!getSingleEventApp) {
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
    const createEventApp = await EventApp.create(data);

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_POST_DATA,
      data: createEventApp,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_POST_DATA });
  }
});

// Delete Event Application

eventAppRoute.delete("/eventapps/delete-eventapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEventApp = await EventApp.findByIdAndDelete(id);

    if (!deleteEventApp) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_DELETE_DATA,
      data: deleteEventApp,
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
    const updateEventApp = await EventApp.findByIdAndUpdate(data, id);

    if (!updateEventApp) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PUT_DATA,
      data: updateEventApp,
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
    const updateItemOnEventApp = await EventApp.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updateItemOnEventApp) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PATCH_DATA,
      data: updateItemOnEventApp,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PATCH_DATA });
  }
});

export default eventAppRoute;

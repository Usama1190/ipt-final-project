import enums from "../constant/enums.js";
import EventApp from "../models/eventAppModel.js";

// Get Events Application

const getEventAppsCon = async (req, res) => {
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
};

// Get Single Event Application

const getEventAppByIdCon = async (req, res) => {
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
};

// Post Event Application

const createEventAppCon = async (req, res) => {
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
};

// Delete Event Application

const deleteEventAppCon = async (req, res) => {
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
};

// Put Event Application

const updateEventAppCon = async (req, res) => {
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
};

// Patch Event Application

const updateItemOnEventCon = async (req, res) => {
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
  }

export {
  getEventAppsCon,
  getEventAppByIdCon,
  createEventAppCon,
  deleteEventAppCon,
  updateEventAppCon,
  updateItemOnEventCon
};

import enums from "../constant/enums";
import Event from "../models/eventModel";

// Get Events

const getEventCon = async (req, res) => {
  try {
    const getAllEvents = await Event.find();
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
};

// Get Single Events

const getEventByIdCon = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleEvents = await Event.findById(id);

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
};

// Post Events

const createEventCon = async (req, res) => {
  try {
    const data = req.body;
    const createEvent = await Event.create(data);

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_POST_DATA,
      data: createEvent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_POST_DATA });
  }
};

// Delete Events

const deleteEventCon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await Event.findByIdAndDelete(id);

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
};

// Put Events

const updateEventCon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateEvent = await Event.findByIdAndUpdate(data, id);

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
};

// Patch Events

const updateItemOnEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateItemOnEvent = await Event.findByIdAndUpdate(id, data, {
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
};

export {
  getEventCon,
  getEventByIdCon,
  createEventCon,
  deleteEventCon,
  updateEventCon,
  updateItemOnEvent
};

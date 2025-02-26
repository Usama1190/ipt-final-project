import express from "express";
import enums from "../constant/enums.js";
import Student from "../models/studentModel.js";

const studentRoute = express.Router();

// Get Student

studentRoute.get("/students", async (req, res) => {
  try {
    const getAllStudents = await Student.find();
    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getAllStudents,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Get Single Student

studentRoute.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleStudent = await Student.findById(id);

    if (!getSingleStudent) {
      res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getSingleStudent,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Post Student

studentRoute.post("/students/create-student", async (req, res) => {
  try {
    const data = req.body;
    const createStudent = await Student.create(data);

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_POST_DATA,
      data: createStudent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_POST_DATA });
  }
});

// Delete Student

studentRoute.delete("/students/delete-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id);

    if (!deleteStudent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_DELETE_DATA,
      data: deleteStudent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_DELETE_DATA });
  }
});

// Put Student

studentRoute.put("/students/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateStudent = await Student.findByIdAndUpdate(data, id);

    if (!updateStudent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PUT_DATA,
      data: updateStudent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PUT_DATA });
  }
});

// Patch Student

studentRoute.patch("/students/update-item-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateItemOnStudent = await Student.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updateItemOnStudent) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PATCH_DATA,
      data: updateItemOnStudent,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PATCH_DATA });
  }
});

export default studentRoute;

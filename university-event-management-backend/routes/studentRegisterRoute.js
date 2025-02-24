import express from "express";
import enums from "../constant/enums.js";
import StudentRegister from "../models/studentRegisterModel.js";

const studentRegisterRoute = express.Router();

// Get Student Registers

studentRegisterRoute.get("/students", async (req, res) => {
  try {
    const getAllRegisters = await StudentRegister.find();
    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getAllRegisters,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Get Single Student Registers

studentRegisterRoute.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleRegister = await StudentRegister.findById(id);

    if (!getSingleRegister) {
      res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_READIND_DATA,
      data: getSingleRegister,
    });
  } catch (error) {
    res
      .status(500)
      .send({ status: 500, message: enums.FAILED_ON_READING_DATA });
  }
});

// Post Student Registers

studentRegisterRoute.post("/students/create-student", async (req, res) => {
  try {
    const data = req.body;
    const createRegister = await StudentRegister.create(data);

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_POST_DATA,
      data: createRegister,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_POST_DATA });
  }
});

// Delete Student Registers

studentRegisterRoute.delete("/students/delete-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRegister = await StudentRegister.findByIdAndDelete(id);

    if (!deleteRegister) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_DELETE_DATA,
      data: deleteRegister,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_DELETE_DATA });
  }
});

// Put Student Registers

studentRegisterRoute.put("/students/update-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateRegister = await StudentRegister.findByIdAndUpdate(data, id);

    if (!updateRegister) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PUT_DATA,
      data: updateRegister,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PUT_DATA });
  }
});

// Patch Student Registers

studentRegisterRoute.patch("/students/update-item-student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateItemOnRegister = await StudentRegister.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updateItemOnRegister) {
      return res.status(404).send({ status: 404, message: enums.NOT_FOUND });
    }

    res.status(200).send({
      status: 200,
      message: enums.SUCCESS_ON_PATCH_DATA,
      data: updateItemOnRegister,
    });
  } catch (error) {
    res.status(502).send({ status: 502, message: enums.FAILED_ON_PATCH_DATA });
  }
});

export default studentRegisterRoute;

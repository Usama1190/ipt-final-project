import { createStudentCon, deleteStudentCon, getStudentByIdCon, getStudentCon, updateItemOnStudent, updateStudentCon } from "../controllers/studentCon.js";
import express from "express";

const studentRoute = express.Router();

// Get Student

studentRoute.get("/students", getStudentCon);

// Get Single Student

studentRoute.get("/students/:id", getStudentByIdCon);

// Post Student

studentRoute.post("/students/create-student", createStudentCon);

// Delete Student

studentRoute.delete("/students/delete-student/:id", deleteStudentCon);

// Put Student

studentRoute.put("/students/update-student/:id", updateStudentCon);

// Patch Student

studentRoute.patch("/students/update-item-student/:id", updateItemOnStudent);

export default studentRoute;

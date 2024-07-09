import express from "express";
import {
  createNewEmployee,
  getEmployees,
  getEmployeesBySalary,
} from "./employee.controller.js";

const router = express.Router();

router.get("/employee", getEmployees);

router.get("/employee-by-salary", getEmployeesBySalary);

router.post("/employee", createNewEmployee);

export default router;

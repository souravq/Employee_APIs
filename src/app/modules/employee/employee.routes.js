import express from "express";
import { createNewEmployee, getEmployees } from "./employee.controller.js";

const router = express.Router();

router.get("/employee", getEmployees);

router.post("/employee", createNewEmployee);

export default router;

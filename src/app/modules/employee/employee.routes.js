import express from "express";
import { getEmployees } from "./employee.controller.js";

const router = express.Router();

router.get("/employee", getEmployees);

export default router;

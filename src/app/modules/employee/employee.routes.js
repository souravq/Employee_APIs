import express from "express";
import {
  createNewEmployee,
  getAvgSalary,
  getCitySalaryPercentage,
  getEmployeeCount,
  getEmployees,
  getEmployeesByAge,
  getEmployeesByAgeBetween,
  getEmployeesBySalary,
  getMostPayedCity,
  getTopEmployees,
  updateExistingEmployee,
} from "./employee.controller.js";

const router = express.Router();

// GET API
router.get("/employee", getEmployees);
router.get("/employee-by-salary", getEmployeesBySalary);
router.get("/employee-by-age", getEmployeesByAge);
router.get("/employee-top/:top_number", getTopEmployees);
router.get("/most-payed-city", getMostPayedCity);
router.get("/avg-salary/:city_name", getAvgSalary);
router.get("/employee-count-per-city", getEmployeeCount);
router.get("/employee-age-between/:from_age/:to_age", getEmployeesByAgeBetween);
router.get("/city-salary-percentae", getCitySalaryPercentage);

//POST API
router.post("/employee", createNewEmployee);
router.post("/employee/:id", updateExistingEmployee);

export default router;

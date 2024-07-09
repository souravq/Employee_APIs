import {
  createEmployee,
  getAllEmployees,
  getAvgSalaryByCity,
  getEmployeeCountPerCity,
  getEmployeesByAgeRange,
  getEmployeesSortedByAge,
  getEmployeesSortedBySalary,
  getMostPaidCity,
  getTopPaidEmployees,
  updateEmployee,
} from "./employee.service.js";
import { StatusCodes } from "http-status-codes";

export const getEmployees = async (req, res) => {
  try {
    const result = await getAllEmployees();
    res.status(StatusCodes.OK).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "Employees are Fetched Successfully",
      data: result,
    });
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({
      status: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: err.message || "Something Went Wrong",
      data: err,
    });
  }
};

export const getEmployeesBySalary = async (req, res) => {
  const employees = await getEmployeesSortedBySalary();
  res.json(employees);
};

export const getEmployeesByAge = async (req, res) => {
  const employees = await getEmployeesSortedByAge();
  res.json(employees);
};

export const getTopEmployees = async (req, res) => {
  const topNumber = parseInt(req.params.top_number);
  const employees = await getTopPaidEmployees(topNumber);
  res.json(employees);
};

export const getMostPayedCity = async (req, res) => {
  const result = await getMostPaidCity();
  res.json(result);
};

export const getAvgSalary = async (req, res) => {
  const cityName = req.params.city_name;
  const result = await getAvgSalaryByCity(cityName);
  res.json(result);
};

export const getEmployeeCount = async (req, res) => {
  const result = await getEmployeeCountPerCity();
  res.json(result);
};

export const getEmployeesByAgeBetween = async (req, res) => {
  const fromAge = parseInt(req.params.from_age);
  const toAge = parseInt(req.params.to_age);
  const employees = await getEmployeesByAgeRange(fromAge, toAge);
  res.json(employees);
};

export const getCitySalaryPercentage = async (req, res) => {
  const percentages = await getCitySalaryPercentage();
  res.json(percentages);
};

export const createNewEmployee = async (req, res) => {
  try {
    const result = await createEmployee(req.body);
    res.status(StatusCodes.CREATED).json({
      status: true,
      statusCode: StatusCodes.OK,
      message: "Employee Created Successfully",
      data: result,
    });
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).json({
      status: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: err.message || "Something Went Wrong",
      data: err,
    });
  }
};

export const updateExistingEmployee = async (req, res) => {
  const updatedEmployee = await updateEmployee(req.params.id, req.body);
  res.json(updatedEmployee);
};

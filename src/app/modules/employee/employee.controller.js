import { createEmployee, getAllEmployees } from "./employee.service.js";
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

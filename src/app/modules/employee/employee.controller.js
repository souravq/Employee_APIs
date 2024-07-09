import { getAllEmployees } from "./employee.service.js";

export const getEmployees = async (req, res) => {
  const employees = await getAllEmployees();
  res.json(employees);
};

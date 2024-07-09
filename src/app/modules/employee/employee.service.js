import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEmployees = async () => {
  return await prisma.employee.findMany({
    orderBy: { created_at: "asc" },
  });
};

// Employees Sorted By Salary
export const getEmployeesSortedBySalary = async () => {
  return await prisma.employee.findMany({
    orderBy: { salary: "asc" },
  });
};

export const createEmployee = async (data) => {
  return await prisma.employee.create({
    data,
  });
};

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

export const getEmployeesSortedByAge = async () => {
  return await prisma.employee.findMany({
    orderBy: [{ age: "asc" }, { name: "asc" }],
  });
};

export const getTopPaidEmployees = async (topNumber) => {
  return await prisma.employee.findMany({
    orderBy: { salary: "desc" },
    take: topNumber,
  });
};

export const getMostPaidCity = async () => {
  const result = await prisma.employee.groupBy({
    by: ["city"],
    _sum: { salary: true },
    orderBy: { _sum: { salary: "desc" } },
    take: 1,
  });
  return result[0];
};

export const getAvgSalaryByCity = async (cityName) => {
  const result = await prisma.employee.aggregate({
    where: { city: cityName },
    _avg: { salary: true },
  });
  return result._avg;
};

export const getEmployeeCountPerCity = async () => {
  return await prisma.employee.groupBy({
    by: ["city"],
    _count: true,
  });
};

export const getEmployeesByAgeRange = async (fromAge, toAge) => {
  return await prisma.employee.findMany({
    where: { age: { gte: fromAge, lte: toAge } },
    orderBy: [{ age: "asc" }, { name: "asc" }],
  });
};

export const getCitySalaryPercentage = async () => {
  const totalSalary = await prisma.employee.aggregate({
    _sum: { salary: true },
  });
  const result = await prisma.employee.groupBy({
    by: ["city"],
    _sum: { salary: true },
  });
  return result.map((city) => ({
    city: city.city,
    percentage: (city._sum.salary / totalSalary._sum.salary) * 100,
  }));
};

export const createEmployee = async (data) => {
  return await prisma.employee.create({
    data,
  });
};

export const updateEmployee = async (id, data) => {
  return await prisma.employee.update({
    where: { empId: parseInt(id) },
    data,
  });
};

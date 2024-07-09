import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllEmployees = async () => {
  return await prisma.employee.findMany({
    orderBy: { created_at: "asc" },
  });
};

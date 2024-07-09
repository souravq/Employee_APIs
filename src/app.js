import express from "express";
import employeeRoutes from "./app/modules/employee/employee.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.use("/api/v1", employeeRoutes);

export default app;

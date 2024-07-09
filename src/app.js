import express from "express";
import employeeRoutes from "./app/modules/employee/employee.routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.use("/api/v1", employeeRoutes);

export default app;

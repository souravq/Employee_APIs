import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

import employeeRoutes from "./app/modules/employee/employee.routes.js";
import fileRoutes from "../src/app/modules/file/file.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.use("/api/v1", employeeRoutes);
app.use("/api", fileRoutes);

export default app;

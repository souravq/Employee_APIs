import express from "express";
import { handleFileUpload } from "./file.controller.js";
import { upload } from "./file.service.js";

const router = express.Router();

router.post("/upload", upload.single("file"), handleFileUpload);

export default router;

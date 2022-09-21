import express from "express";
import apiRouter from "./api.routes";
import pageRouter from "./page.routes";

const router = express.Router();

// Handle all api routes
router.use("/api", apiRouter);

// Handle all page routes
router.use(pageRouter);

export default router;

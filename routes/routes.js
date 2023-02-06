import express from "express";
import { getSessions } from "../models/models.js";

const router = express.Router();

router.get("/sessions", async function (req, res) {
  const response = await getSessions();
  res.status(200).json({
    success: true,
    payload: response,
  });
});

export {router}
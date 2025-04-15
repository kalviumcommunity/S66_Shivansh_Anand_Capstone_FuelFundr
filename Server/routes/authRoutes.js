import express from "express";
import getAllUsers from "../controllers/authController.js";

const router = express.Router();

router.get("/users", getAllUsers);

export default router;

import express from "express";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import connectDB from "./config/db.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";
import cookieParser from "cookie-parser";

configDotenv();
const app = express();
app.use(express.json());
app.use(cookieParser()); 

const PORT = process.env.PORT || 2727;

connectDB();

app.use(apiLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/campaigns", campaignRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

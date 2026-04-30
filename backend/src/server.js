import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// ✅ Connect DB
connectDB();

// ✅ Start server
app.listen(PORT, () => {
  logger("success", `Server running on port ${PORT}`);
});
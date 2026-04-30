import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/email", emailRoutes);
app.use("/api/messages", messageRoutes);

export default app;
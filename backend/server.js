

const crypto = require("crypto");
global.crypto = crypto;
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

/**
 * ✅ CORS FIX (IMPORTANT for React + EC2)
 */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/**
 * ✅ MONGODB CONNECTION (USE .env in production)
 */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

/**
 * ✅ ROUTES
 */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/service", require("./routes/service"));

/**
 * 🔥 IMPORTANT: ADD YOUR DOCUMENT ROUTES HERE
 */
app.use("/api/document", require("./routes/documentRoutes"));

/**
 * ✅ TEST ROUTE
 */
app.get("/", (req, res) => {
  res.send("🚀 Backend running on EC2");
});

app.get("/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

/**
 * 🚀 START SERVER
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
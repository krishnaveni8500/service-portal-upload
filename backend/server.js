const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://sskrishnaveni11_db_user:MGlgvxmYufdA4719@cluster0.rp6bf7j.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/service", require("./routes/service"));
app.get("/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.listen(3000, () => console.log("Server running on 3000"));
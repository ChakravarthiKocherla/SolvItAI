const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
  res.send("SolvItAI backend running with all routes");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

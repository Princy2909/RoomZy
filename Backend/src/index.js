const express = require("express");
const connectDB = require("./config/server-config");
const dotenv = require("dotenv");
const authRoutes = require("./routes");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);
port=8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
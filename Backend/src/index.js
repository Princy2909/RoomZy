const express = require("express");
const cookieParser=require("cookie-parser");
const connectDB = require("./config/server-config");
const dotenv = require("dotenv");
const authRoutes = require("./routes");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api", authRoutes);
port=8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
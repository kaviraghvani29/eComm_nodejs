const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const { connectDB } = require("./src/config/db");
const cookieParser = require("cookie-parser");
const authRoute = require("./src/routes/authRoute");
const userRoute = require("./src/routes/userRoute");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

connectDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

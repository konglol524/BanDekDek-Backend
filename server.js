const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const rentals = require("./routes/rentals");
const auth = require("./routes/auth");
const app = express();
//add body parser
app.use(express.json());
app.use("/api/v1/rentals", rentals);
app.use("/api/v1/auth", auth);
//Cookie parser
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    "Server running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server and exit process
  server.close(() => process.exit(1));
});

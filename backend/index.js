const express = require("express");
const mediaRouter = require("./routes/mediaRoutes");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3000;
const { connection } = require("./config/db");

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/media", mediaRouter);

// Start the server
app.listen(port, () => {
  connection();
  console.log(`Server is running on http://localhost:${port}`);
});

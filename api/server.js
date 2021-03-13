const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// Server
const app = express();
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

module.exports = app;

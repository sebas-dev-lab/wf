const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const uuid = require("uuid/4");
require("dotenv").config();

// Server
const app = express();
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img/uploads"),
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + Date.now() + path.extname(file.originalname));
  },
});
app.use(multer({ storage: storage }).array(fieldname));

// Routes

module.exports = app;

const mongoose = require("mongoose");
require("dotenv").config();

const { DATABASE } = process.env;

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose;

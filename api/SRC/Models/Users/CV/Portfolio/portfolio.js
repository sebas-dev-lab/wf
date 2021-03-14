const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const portfolioSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  client: {
    type: String,
  },
  url: {
    type: String,
  },
  img: {
    type: Schema.Types.ObjectId,
    ref: "Img",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

portfolioSchema.plugin(require("mongoose-autopopulate"));

portfolioSchema.plugin(autoIncrement.plugin, {
  model: "Portfolio",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

portfolioSchema.plugin(findOrCreate);

const Portfolio = model("Portfolio", portfolioSchema);

module.exports = Portfolio;

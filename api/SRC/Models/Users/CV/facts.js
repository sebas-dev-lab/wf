const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const factSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  ranking: {
    type: Number,
  },
});
factSchema.plugin(require("mongoose-autopopulate"));
factSchema.plugin(autoIncrement.plugin, {
  model: "Facts",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
factSchema.plugin(findOrCreate);

const Facts = model("Fact", factSchem);

module.exports = Facts;

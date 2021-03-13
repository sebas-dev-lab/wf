const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const categorySchema = new Schema({
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
});

categorySchema.plugin(require("mongoose-autopopulate"));

categorySchema.plugin(autoIncrement.plugin, {
  model: "Category",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

categorySchema.plugin(findOrCreate);

const Category = model("Category", categorySchema);

module.exports = Category;

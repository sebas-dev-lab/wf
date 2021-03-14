const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const serviceSchema = new Schema({
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
    required: true,
  },
  img_icon: {
    type: String,
  },
});

serviceSchema.plugin(findOrCreate);
serviceSchema.plugin(require("mongoose-autopopulate"));
serviceSchema.plugin(autoIncrement.plugin, {
  model: "Service",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Service = model("Service", serviceSchema);

module.exports = Service;

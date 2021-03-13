const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const expSchema = new Schema({
  code: {
    type: Number,
    defautl: 0,
    unique: true,
  },
  place: {
    type: String,
    required: true,
  },
  charge: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
  },
  Status: {
    type: Boolean,
    required: true,
  },
});

expSchema.plugin(require("mongoose-autopopulate"));
expSchema.plugin(findOrCreate);
expSchema.plugin(autoIncrement.plugin, {
  model: "Experience",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Experience = model("Experience", expSchema);

module.exports = Experience;

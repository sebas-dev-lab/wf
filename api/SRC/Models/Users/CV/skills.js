const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const skillSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  resume: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
  },
});

skillSchema.plugin(require("mongoose-autopopulate"));
skillSchema.plugin(findOrCreate);
skillSchema.plugin(autoIncrement.plugin, {
  model: "Skill",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;

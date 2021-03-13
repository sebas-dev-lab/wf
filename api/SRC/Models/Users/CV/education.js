const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const eduSchema = new Schema({
  code: {
    type: Number,
    defautl: 0,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start_age: {
    type: Number,
    required: true,
  },
  end_age: {
    type: Number,
  },
  status: {
    type: String,
    ENUM: ["current", "finish", "abandoned"],
    default: "finish",
  },
  place: {
    type: String,
    required: true,
  },
});

eduSchema.plugin(require("mongoose-autopopulate"));
eduSchema.plugin(findOrCreate);
eduSchema.plugin(autoIncrement.plugin, {
  model: "Education",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Education = model("Education", eduSchema);

module.exports = Education;

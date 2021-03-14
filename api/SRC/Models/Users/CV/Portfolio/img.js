const { Schema, model, connection } = requier("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const imgSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  title: { type: String },
  filename: { type: String },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  description: { type: String },
  mimetype: { type: String },
});

imgSchema.plugin(require("mongoose-autopopulate"));
imgSchema.plugin(findOrCreate);
imgSchema.plugin(autoIncrement.plugin, {
  model: "Img",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Img = model("Img", imgSchema);

module.exports = Img;

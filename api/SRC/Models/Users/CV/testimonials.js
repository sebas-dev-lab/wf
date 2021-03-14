const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const tistimonialSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  resume: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

tistimonialSchema.plugin(require("mongoose-autopopulate"));
tistimonialSchema.plugin(findOrCreate);
tistimonialSchema.plugin(autoIncrement.plugin, {
  model: "Skill",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

const Testimonial = model("Testimonial", tistimonialSchema);

module.exports = Testimonial;

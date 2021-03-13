const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const user_cv_Schema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  about: {
    type: Schema.Types.ObjectId,
    ref: "About",
  },
  facts: {
    type: Schema.Types.ObjectId,
    ref: "Facts",
  },
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: "Portfolio",
  },
  education: {
    type: Schema.Types.ObjectId,
    ref: "Education",
  },
  experience: {
    type: Schema.Types.ObjectId,
    ref: "Experience",
  },
  skills: {
    type: Schema.Types.ObjectId,
    ref: "Skills",
  },
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: "Portfolio",
  },
  testimonials: {
    Type: Schema.Types.ObjectId,
    ref: "Testimonials",
  },
});

user_cv_Schema.plugin(require("mongoose-autopopulate"));
user_cv_Schema.plugin(autoIncrement.plugin, {
  model: "CV",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});
user_cv_Schema.plugin(findOrCreate);

const CV = model("CV", user_cv_Schema);

module.exports = CV;

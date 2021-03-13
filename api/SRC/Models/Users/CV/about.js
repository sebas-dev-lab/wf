const { Schema, model } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const aboutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  presentation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

aboutSchema.plugin(require("mongoose-autopopulate"));
aboutSchema.plugin(findOrCreate);

const About = model("About", aboutSchema);

module.exports = About;

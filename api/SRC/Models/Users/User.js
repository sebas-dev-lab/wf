const { Schema, model, connection } = require("mongoose");
var autoIncrement = require("mongoose-auto-increment"); //no modificar
autoIncrement.initialize(connection);
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  code: {
    type: Number,
    default: 0,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    unique: true,
  },
  birth: {
    type: String,
  },
  City: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  Tel_1: {
    type: Number,
  },
  Tel_2: {
    type: Number,
  },
  role: {
    type: String,
    ENUM: ["admin", "applicant", "recruiter"],
    default: "applicant",
  },
  web_page: {
    type: String,
  },
  social_media: {
    type: Map,
    of: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  user_location: {
    type: [Number],
    index: "2dsphere",
    sparse: true,
  },
  user_cv: {
    type: Schema.Types.ObjectId,
    ref: "CV",
  },
  user_analytics: {
    type: Schema.Types.ObjectId,
    ref: "Analytics",
  },
  user_message: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
});

userSchema.plugin(require("mongoose-autopopulate"));

userSchema.plugin(autoIncrement.plugin, {
  model: "User",
  field: "code",
  startAt: 1,
  incrementBy: 1,
});

userSchema.plugin(findOrCreate);

const User = model("User", userSchema);

module.exports = User;

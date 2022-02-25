const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("user", UserSchema);

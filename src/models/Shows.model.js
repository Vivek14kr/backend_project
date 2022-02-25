const { Schema, model, SchemaTypes } = require("mongoose");

const ShowsSchema = Schema(
  {
    timing: { type: String, required: true },
    movie: {
      type: Schema.Types.ObjectId,
      ref: "movie",
      required: true,
    },
    total_seats: {
      type: Number,
      required: true,
    },
    screen: {
      type: Schema.Types.ObjectId,
      ref: "screen",
      required: true,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = model("shows", ShowsSchema);

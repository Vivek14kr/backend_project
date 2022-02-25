const { Schema, model, SchemaTypes } = require("mongoose");

const ScreenSchema = Schema(
  {
    name: { type: String, required: true },
   theatre:{
       type: Schema.Types.ObjectId,
       ref:"theatre",
       required:true
   }
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = model("screen", ScreenSchema);

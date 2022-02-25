const {Schema, model} = require("mongoose")

const TheatreSchema = Schema(
    {

        name:{type:String, required:true},
        location:{type:String, required: true}
    }, {
        versionKey: false,
        timeStamps:true
    }
)

module.exports = model("theatre", TheatreSchema)
const {Schema, model} = require("mongoose")

const MovieSchema = Schema(

    {
        name: {type:String, required: true},
        actors:[{type:String, required:true}],
        language: [{type:String, required:true}],
        directors: [{type:String, required:true}],
        
    }, {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = model("movie", MovieSchema);
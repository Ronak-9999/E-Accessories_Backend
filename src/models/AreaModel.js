const mongoose = require("mongoose")
const Schema = mongoose.Schema

const areaSchema = new Schema({
    Name:{
        type:String,
        required:true,
        unique:true,
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",
    },
    Pincode:{
        type:Number,
        required:true,
        unique:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model("area",areaSchema);
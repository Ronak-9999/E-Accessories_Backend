const mongoose = require("mongoose");
const Schema = mongoose.Schema

const categorySchema = new Schema ({
    CategoryName:{
        type:String,
    },

},{
    timestamps:true,
}) 

module.exports = mongoose.model("category",categorySchema)
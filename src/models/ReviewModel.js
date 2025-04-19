const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema ({
    name:{
        type:String,
    },
    review:{
        type:String,
    },
    rating:{
        type:Number,
        min: 1, max: 5,
    },
    productCardId:{
        type: Schema.Types.ObjectId,
        ref: "productcard",
    }
},{
    timestamps:true
})

module.exports = mongoose.model("review",reviewSchema)
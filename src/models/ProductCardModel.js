const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productCardSchema = new Schema ({
    ProductName:{
        type:String,
    },
    BasePrice:{
        type:Number,
    },
    OfferPrice:{
        type:Number,
    },
    Rating:{
        type:Number,
    },
    ProductDetail:{
        type:String,
    },
    ProductImageURL1:{
        type:String,
    },
},{
    timestamps:true
})

module.exports = mongoose.model("productcard",productCardSchema)
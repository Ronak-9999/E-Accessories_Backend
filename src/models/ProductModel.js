const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema ({
    ProductName:{
        type:String,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category",
    },
    subCategoryId:{
        type:Schema.Types.ObjectId,
        ref:"subcategory",
    },
    BasePrice:{
        type:Number,
    },
    OfferPrice:{
        type:Number,
    },
    OfferPercentage:{
        type:Number
    },
    ProductDetail:{
        type:String,
    },
    ProductImageURL1:{
        type:String,
    },
    ProductImageURL2:{
        type:String,
    },
    ProductImageURL3:{
        type:String,
    },
    Quantity:{
        type:Number,
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"state",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"city",
    },
    areaId:{
        type:Schema.Types.ObjectId,
        ref:"area",
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
},{
    timestamps:true
})

module.exports = mongoose.model("product",productSchema)
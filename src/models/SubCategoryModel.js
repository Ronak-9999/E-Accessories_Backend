const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subCategorySchema = new Schema ({
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:"category",
    },
    SubCategoryName:{
        type:String,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("subcategory",subCategorySchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    items:[{
        productId:{
            type:Schema.Types.ObjectId,
            ref: "product",
        },
        quantity:{
            type: Number,
        }
    }]
},{
    timestamps:true
})

module.exports = mongoose.model("cart",cartSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
    totalAmount: {
        type: Number,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    status:{
        type:Boolean,
    },
},{
    timestamps:true
})

module.exports = mongoose.model("order",orderSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendorSchema = new Schema({
    StoreName: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    }
},{
    timestamps:true
})

module.exports = mongoose.model("vendor",vendorSchema)
const orderModel = require("../models/OrderModel")

const addOrder = async (req,res) => {
    try{
        const savedOrder = await orderModel.create(req.body)
        res.status(201).json({
            message:"Order Added Successfully...",
            data:savedOrder
        })
    }
    catch(err){
        res.status(500).json({
            message:err,
        })
    }
}

const getAllOrder = async (req,res) => {
    try{
        const Orders = await orderModel.find()
        res.status(200).json({
            message:"All Orders Fetch Successfully...",
            data:Orders
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addOrder,getAllOrder
}
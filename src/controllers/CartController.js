const cartModel = require("../models/CartModel")

const addCart = async (req,res) => {
    try{
        const savedCart = await cartModel.create(req.body)
        res.status(201).json({
            message:"Cart Added Successfully...",
            data:savedCart
        })
    }
    catch(err){
        res.status(500).json({
            message:err,
        })
    }
}

const getAllCart = async (req,res) => {
    try{
        const Carts = await cartModel.find()
        res.status(200).json({
            message:"All Carts Fetch Successfully...",
            data:Carts
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addCart,getAllCart
}
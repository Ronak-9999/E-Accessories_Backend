const categoryModel = require("../models/CategoryModel")

const addCategory = async (req,res) => {
    try{
        const savedCategory = await categoryModel.create(req.body)
        res.status(201).json({
            message:"Category Added Successfully...",
            data:savedCategory
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllCategory = async (req,res) => {
    try{
        const categories = await categoryModel.find()
        res.status(200).json({
            message:"All Categories Fetch Successfully...",
            data:categories
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addCategory,getAllCategory
}
const subCategoryModel = require("../models/SubCategoryModel")

const addSubCategory = async (req,res) => {
    try{
        const savedSubCategory = await subCategoryModel.create(req.body)
        res.status(201).json({
            message:"SubCategory Added Successfully...",
            data:savedSubCategory
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllSubCategory = async (req,res) => {
    try{
        const subCategories = await subCategoryModel.find().populate("categoryId")
        res.status(200).json({
            message:"All SubCategory Fetch Successfully...",
            data:subCategories
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getSubCategoryByCategoryId = async (req,res) => {
    try{
        const subCategories = await subCategoryModel.find({categoryId : req.params.categoryId})
        res.status(200).json({
            message:"SubCategory Found...",
            data:subCategories
        })
    }
    catch(err){
        res.status(500).json({
            message:"SubCategory Not Found...",
        })
    }
}

module.exports = {
    addSubCategory,getAllSubCategory,getSubCategoryByCategoryId
}
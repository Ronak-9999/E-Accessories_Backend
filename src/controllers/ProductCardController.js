const productCardModel = require("../models/ProductCardModel")
const multer = require("multer")
const path = require("path")
const cloudinaryUtil = require("../utils/CloudinaryUtil")

const storage = multer.diskStorage({
    destination:"./products",
    filename: function(req,file,cb) {
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage:storage,  
}).single('image');

const addProductCard = async (req,res) => {
    try{
        const savedProductCard = await productCardModel.create(req.body)
        res.status(201).json({
            message:"Product Added Successfully...",
            data:savedProductCard
        })
    }
    catch(err){
        res.status(500).json({
            message:err,
        })
    }
}

const getAllProductCard = async (req,res) => {
    try{
        const products = await productCardModel.find()
        if(products.length === 0){
            res.status(404).json({
                message:"No Product Found",
            })
        }
        else{
            res.status(200).json({
                message:"All Product Fetch Successfully...",
                data:products
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const addProductCardWithFile = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        try {
            const cloudinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
            console.log(cloudinaryResponse);
            console.log(req.body);

            req.body.ProductImageURL1 = cloudinaryResponse.secure_url;

            const savedProductCard = await productCardModel.create(req.body);
            res.status(201).json({
                message: "Product Added Successfully...",
                data: savedProductCard
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: "An error occurred while processing the request." });
        }
    });
};

const getAllProductCardByUserId = async (req,res) => {
    try{
        const products = await productCardModel.find({userId:req.params.userId}).populate("stateId cityId areaId userId")
        if(products.length === 0){
            res.status(404).json({
                message:"No Products Found..."
            })
        }
        else{
            res.status(200).json({
                message:"Product Found Successfully...",
                data:products
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {
    addProductCard,getAllProductCard,getAllProductCardByUserId,addProductCardWithFile
}
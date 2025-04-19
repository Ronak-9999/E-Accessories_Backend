const productModel = require("../models/ProductModel")
const multer = require("multer")
const path = require("path")
const cloudinaryUtil = require("../utils/CloudinaryUtil")

const storage = multer.diskStorage({
    destination:"./uploads",
    filename: function(req,file,cb) {
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage:storage,  
}).single('image');

// const addProductWithFile = async (req,res) => {
//     upload(req,res, async (err) => {
//         if(err){
//             res.status(500).json({
//                 message:err.message
//             })
//         }
//         else {
//             const cloudinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
//             console.log(cloudinaryResponse);
//             console.log(req.body)

//             req.body.ProductImageURL1 = cloudinaryResponse.secure_url
//             const savedProduct = await productModel.create(req.body)
//             res.status(201).json({
//                 message:"Product Added Successfully...",
//                 data:savedProduct
//             })
//         }
//     })
// }

const getAllProductByUserId = async (req,res) => {
    try{
        const products = await productModel.find({userId:req.params.userId}).populate("stateId cityId areaId userId")
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

const addProductWithFile = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        try {
            const cloudinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
            console.log(cloudinaryResponse);
            console.log(req.body);

            req.body.ProductImageURL1 = cloudinaryResponse.secure_url;

            const savedProduct = await productModel.create(req.body);
            res.status(201).json({
                message: "Product Added Successfully...",
                data: savedProduct
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: "An error occurred while processing the request." });
        }
    });
};

// const addHordingWithFile = async (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(500).json({
//         message: err.message,
//       });
//     } else {
//       // database data store
//       //cloundinary
//       console.log(req.body);
//       res.status(200).json({
//         message: "File uploaded successfully",
//         data: req.file,
//       });
//     }
//   });
// };

const addProduct = async (req,res) => {
    try{
        const savedProduct = await productModel.create(req.body)
        res.status(201).json({
            message:"Product Added Successfully...",
            data:savedProduct
        })
    }
    catch(err){
        res.status(500).json({
            message:err,
        })
    }
}

const getAllProduct = async (req,res) => {
    try{
        const products = await productModel.find().populate("stateId cityId areaId categoryId subCategoryId userId")
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

const updateProduct = async (req,res) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            message:"Product Updated Successfully...",
            data:updatedProduct
        })
    }
    catch(error){
        res.status(500).json({
            message:"Error While Updating Product",
            err:error
        })
    }
}

const getProductById = async (req,res) => {
    try{
        const product = await productModel.findById(req.params.id)
        if(!product){
            res.status(404).json({
                message:"No Product Found",
            })
        }
        else{
            res.status(200).json({
                message:"Product Found Successfully...",
                data:product
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
}

const deleteProduct = async (req,res) => {
    try{
        const deletedProduct = await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"Product Deleted Successfully...",
            data:deletedProduct
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addProduct,getAllProduct,addProductWithFile,getAllProductByUserId,updateProduct,getProductById,deleteProduct
}
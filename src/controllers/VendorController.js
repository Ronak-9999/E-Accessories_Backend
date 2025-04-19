const vendorModel = require("../models/VendorModel")

const addVendor = async (req,res) => {
    try{
        const savedVendor = await vendorModel.create(req.body)
        res.status(201).json({
            message:"Vendor Added Successfully...",
            data:savedVendor
        })
    }
    catch(err){
        res.status(500).json({
            message:err,
        })
    }
}

const getAllVendor = async (req,res) => {
    try{
        const Vendors = await VendorModel.find()
        res.status(200).json({
            message:"All Vendors Fetch Successfully...",
            data:Vendors
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addVendor,getAllVendor
}
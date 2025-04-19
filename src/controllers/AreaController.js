const areaModel = require("../models/AreaModel")

const addArea = async (req,res)=>{
    try{
        const savedArea = await areaModel.create(req.body)
        res.status(201).json({
            message:"Area Added Successfully...",
            data:savedArea,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllArea = async(req,res) => {
    try{
        const areas = await areaModel.find().populate("stateId").populate("cityId")
        res.status(200).json({
            message:"All Area Fetched Successfully...",
            data:areas
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAreaByCityId = async(req,res) => {
    try{
        const areas = await areaModel.find({cityId : req.params.cityId})
        res.status(200).json({
            message:"Area Found...",
            data:areas,
        })
    }
    catch(err){
        res.status(500).json({
            message:"Area Not Found...",
        })
    }
}

module.exports = {
    addArea,getAllArea,getAreaByCityId
}
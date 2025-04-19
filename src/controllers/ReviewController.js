const reviewModel = require("../models/ReviewModel")

const addReview = async (req,res) => {
    try{
        const savedReview = await reviewModel.create(req.body)
        res.status(201).json({
            message:"Review Added Successfully...",
            data:savedReview
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllReview = async (req,res) => {
    try{
        const reviews = await reviewModel.find()
        res.status(200).json({
            message:"All Reviews Fetch Successfully...",
            data:reviews
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addReview,getAllReview
}
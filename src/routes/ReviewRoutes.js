const routes = require("express").Router()
const reviewController = require("../controllers/ReviewController")

routes.post("/review",reviewController.addReview)
routes.get("/reviews",reviewController.getAllReview)

module.exports = routes;
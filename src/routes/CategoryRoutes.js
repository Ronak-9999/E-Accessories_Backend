const routes = require("express").Router()
const categoryController = require("../controllers/CategoryController")

routes.post("/category",categoryController.addCategory)
routes.get("/categories",categoryController.getAllCategory)

module.exports = routes;
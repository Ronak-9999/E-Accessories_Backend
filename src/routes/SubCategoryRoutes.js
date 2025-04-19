const routes = require("express").Router()
const subCategoryController = require("../controllers/SubCategoryController")

routes.post("/subcategory",subCategoryController.addSubCategory)
routes.get("/subcategories",subCategoryController.getAllSubCategory)
routes.get("/subcategories/:categoryId",subCategoryController.getSubCategoryByCategoryId)

module.exports = routes;
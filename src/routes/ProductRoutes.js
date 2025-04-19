const routes = require("express").Router()
const productController = require("../controllers/ProductController")

routes.post("/product",productController.addProduct)
routes.get("/products",productController.getAllProduct)
routes.post("/productfile",productController.addProductWithFile)
routes.get("/productsbyuserid/:userId",productController.getAllProductByUserId)
routes.put("/updateproduct/:id",productController.updateProduct)
routes.get("/productbyid/:id",productController.getProductById)

module.exports = routes;
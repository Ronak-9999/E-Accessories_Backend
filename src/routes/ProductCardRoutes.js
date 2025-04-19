const routes = require("express").Router()
const productCardController = require("../controllers/ProductCardController")

routes.post("/productcard",productCardController.addProductCard)
routes.get("/productcards",productCardController.getAllProductCard)
routes.post("/productcardfile",productCardController.addProductCardWithFile)
routes.get("/productcardsbyuserid/:userId",productCardController.getAllProductCardByUserId)
//routes.put("/updateproduct/:id",productCardController.updateProduct)
//routes.get("/productbyid/:id",productCardController.getProductById)

module.exports = routes;
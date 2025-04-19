const routes = require("express").Router()
const cartController = require("../controllers/CartController")

routes.post("/cart",cartController.addCart)
routes.get("/carts",cartController.getAllCart)

module.exports = routes
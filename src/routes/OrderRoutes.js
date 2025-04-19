const routes = require("express").Router()
const orderController = require("../controllers/OrderController")

routes.post("/order",orderController.addOrder)
routes.get("/orders",orderController.getAllOrder)

module.exports = routes;
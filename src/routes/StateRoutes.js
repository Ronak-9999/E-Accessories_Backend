const routes = require("express").Router()
const stateController = require("../controllers/StateController")

routes.post("/state",stateController.addState)
routes.get("/states",stateController.getAllState)

module.exports = routes;
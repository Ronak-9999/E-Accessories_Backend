const routes = require("express").Router()
const cityController = require("../controllers/CityController")
routes.post("/city",cityController.addCity)
routes.get("/cities",cityController.getAllCity)
routes.get("/cities/:stateId",cityController.getCityByStateId)

module.exports = routes;

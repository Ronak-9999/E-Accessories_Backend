const routes = require("express").Router()
const areaController = require("../controllers/AreaController")
routes.post("/area",areaController.addArea)
routes.get("/areas",areaController.getAllArea)
routes.get("/areas/:cityId",areaController.getAreaByCityId)

module.exports = routes;
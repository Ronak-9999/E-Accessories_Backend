const routes = require("express").Router()
const vendorController = require("../controllers/VendorController")

routes.post("/vendor",vendorController.addVendor)
routes.get("/vendors",vendorController.getAllVendor)

module.exports = routes
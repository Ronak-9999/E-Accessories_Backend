//router
const routes = require("express").Router()
const middleware = require("../middlewares/AuthMiddleware")
//controller --> userController
const userController = require("../controllers/UserController")

//get
routes.get("/users",userController.getAllUser)
//post
//routes.post("/user",userController.addUser)
routes.post("/user",userController.signUp)
//delete
routes.delete("/user/:id",userController.deleteUser)
//get-byid
routes.get("/user/:id",userController.getUserById)
routes.post("/user/login",userController.loginUser)
routes.post("/user/forgotpassword",userController.forgotPassword)
routes.post("/user/resetpassword",userController.resetPassword)

module.exports = routes;

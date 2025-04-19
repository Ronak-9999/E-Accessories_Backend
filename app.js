const express = require("express") //express....
const mongoose = require("mongoose")
const cors = require("cors")
//express object..
const app = express()
app.use(cors())
app.use(express.json())  //to accept data as json...

//import role routes
const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

//userRoutes
const userRoutes = require("./src/routes/UserRoutes")
app.use(userRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes)

const areaRoutes = require("./src/routes/AreaRoutes")
app.use("/area",areaRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",categoryRoutes)

const subCategoryRoutes = require("./src/routes/SubCategoryRoutes")
app.use("/subcategory",subCategoryRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
app.use("/product",productRoutes)

const vendorRoutes = require("./src/routes/VendorRoutes")
app.use("/vendor",vendorRoutes)

const orderRoutes = require("./src/routes/OrderRoutes")
app.use("/order",orderRoutes)

const cartRoutes = require("./src/routes/CartRoutes")
app.use("/cart",cartRoutes)

const productCardRoutes = require("./src/routes/ProductCardRoutes")
app.use("/productcard",productCardRoutes)

const reviewRoutes = require("./src/routes/ReviewRoutes")
app.use("/review",reviewRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Data Fetch Successfully...")
})

//userRoutes
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server started on port number", PORT)
})
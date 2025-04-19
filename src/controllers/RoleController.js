const roleModel = require("../models/RoleModel")
//roleModel == roles
const getAllRoles = async(req,res)=> {
    //await....
    //select * from roleModel
    const roles = await roleModel.find()  //[{}]
    res.json({
        message:"Role Fetch Successfully....",
        data:roles
    })
}

const addRole = async(req,res)=>{
    console.log("requested body...",req.body)
    //req.body,req.params,req.headers,req.query
    //console.log("request body....", req.body);
    //insert into roles () values()
    //database...
    const savedRole =await roleModel.create(req.body)
    res.json({
        message:"Role Created...",
        data:savedRole
    })
}

const deleteRole = async(req,res)=>{
    //delete from roles where id =?
    //req.params
    //console.log(req.params.id) //prams object...
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"Role Deleted Successfully...",
        data:deletedRole
    })
}

const getRoleById = async(req,res)=>{
    //req.params.id
    const foundRole = await roleModel.findById(req.params.id)
    res.json({
        message:"Role Fetched..",
        data:foundRole
    })
}
module.exports = {
    getAllRoles,addRole,deleteRole,getRoleById
}
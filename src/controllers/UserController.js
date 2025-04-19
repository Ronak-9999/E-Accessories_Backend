//users table.. -->userModel
const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")
const mailUtil = require("../utils/MailUtil")
const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET;

//getUser
const getAllUser = async (req, res) => {
    const users = await userModel.find().populate("roleId");
    res.json({
        message: "User Fetch Successfully....",
        data: users
    })
}
const addUser = async (req, res) => {
    //console.log("request boby...",req.body);
    const savedUser = await userModel.create(req.body)
    res.json({
        message: "User Created...",
        data: savedUser
    })
}

const loginUser = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const foundUserFromEmail = await userModel.findOne({ email: email }).populate("roleId")
        console.log(foundUserFromEmail)

        // Generate JWT token
        const token = jwt.sign({ id: foundUserFromEmail._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        if (foundUserFromEmail != null) {
            const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password)
            if (isMatch == true) {
                console.log(res.status.json)
                res.status(200).json({
                    message: "Login Successfull..",
                    token,
                    data: foundUserFromEmail
                })
            } else {
                res.status(404).json({
                    message: "Invalid Credentials..."
                })
            }
        } else {
            res.status(404).json({
                message: "Email not found..."
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "INTERNAL SERVER ERROR",
            data: error
        })
    }
}

const signUp = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hashedPassword
        const createdUser = await userModel.create(req.body)
        await mailUtil.sendingMail(createdUser.email, "WELCOME MAIL", "This is Welcome mail of E-ACCESSORIES")
        // Generate JWT token
        // const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET, {
        //     expiresIn: "7d",
        // });

        res.status(201).json({
            message: "User Created...",
            // token,
            data: createdUser
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "ERROR",
            data: err
        })
    }
}
//deleteUser
const deleteUser = async (req, res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)
    res.json({
        message: "User Deleted Successfully...",
        data: deletedUser
    })
}
//getUserById
const getUserById = async (req, res) => {
    try {
        const foundUser = await userModel.findById(req.params.id)
        res.json({
            message: "User Fetched...",
            data: foundUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "ERROR",
            data: error
        })
    }
}

const forgotPassword = async (req, res) => {
    const email = req.body.email
    const foundUser = await userModel.findOne({ email: email })

    if (foundUser) {
        const token = jwt.sign(foundUser.toObject(), process.env.JWT_SECRET);
        console.log(token);
        const url = `http://localhost:5173/resetpassword/${token}`;
        const mailContent = `<html>
                            <a href = ${url}>Reset Password</a>
                            </html>`;
        await mailUtil.sendingMail(foundUser.email, "Reset Password", mailContent)
        res.json({
            message: "Reset password link send to mail.",
        });
    }
    else {
        res.json({
            message: "User not found, register first",
        })
    }
}

const resetPassword = async (req, res) => {
    try {
        const token = req.body.token;
        const newPassword = req.body.password;

        const userFromToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token)
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(newPassword, salt);

        const updateUser = await userModel.findByIdAndUpdate(userFromToken._id, {
            password: hashedPassword,
        });
        res.json({
            message: "Password Update Successfully...",
        })
    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(400).json({ message: "Invalid or expired token" });
    }

}

//exports
module.exports = {
    getAllUser,
    addUser,
    deleteUser, getUserById, signUp, loginUser, forgotPassword, resetPassword
}
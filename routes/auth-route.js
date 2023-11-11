const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const route = express.Router()

const User = require("../models/Users")

route.post("/login", (req, res) => {
    let data = req.body

    const user = User.find(item => item.email == data.email)
    //select * from user where email = irvityara456@gmail.com
    
    if (!user) {
        res.json({
            message: "email salah!"
        })
        return
    }

    if (bcrypt.compareSync(data.password, user.password)) {
        const token = jwt.sign({email: data.email}, "pucucasabjk")
        res.json({
            message: "anda berhasil login",
            token
        })
        return
    }
    
    res.json({
        message: "password anda salah"
    }) 
})

route.post("/regis", (req, res) => {
    let data = req.body

    let saltRounds = 10
    let hashPassword = bcrypt.hashSync(data.password, saltRounds)
    data.password = hashPassword
    
    console.log(data);
    User.push(data)

    res.json({
        message: "berhasil regis"
    })

})

module.exports = route
const express = require("express");
const bcrypt = require("bcrypt")
const route = express.Router()

const User = require("../models/Users")

route.post("/login", () => {
    
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
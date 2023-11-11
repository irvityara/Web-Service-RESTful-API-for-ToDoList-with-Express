const express = require("express");
const route = express.Router()
const todoRoutes = require("./todo-route")
const userRoutes = require("./user-route")
const authRoutes = require("./auth-route")

route.get("/", (req, res) => {
})

route.use("/users", userRoutes)
route.use("/todos", todoRoutes)
route.use("/auth", authRoutes)

module.exports = route
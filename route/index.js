const express = require("express");
const route = express.Router()
const todoRoutes = require("./todo-route")

route.get("/", (req, res) => {
})

route.use("/todos", todoRoutes)
// route.use("/users", userRoutes)

module.exports = route
const express = require("express");
const route = express.Router();
const todoRoutes = require("./todo-route");
const userRoutes = require("./user-route");
const authRoutes = require("./auth-route");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
  res.json("halo");
});

route.use("/users", userRoutes);
route.use("/auth", authRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;

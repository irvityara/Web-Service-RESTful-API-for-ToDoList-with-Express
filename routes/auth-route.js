const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const User = require("../models/Users");
const db = require("../models/index");

route.post("/login", async (req, res) => {
  let data = req.body;

  const user = await db.User.findOne({ where: { email: data.email } });

  if (!user) {
    res.json({
      message: "email salah!",
    });
    return;
  }

  if (bcrypt.compareSync(data.password, user.password)) {
    const token = jwt.sign({ email: data.email }, "pucucasabjk");
    res.json({
      message: "anda berhasil login",
      token,
    });
    return;
  }

  res.json({
    message: "password anda salah",
  });
});

route.post("/regis", async (req, res) => {
  let data = req.body;

  let saltRounds = 10;
  let hashPassword = bcrypt.hashSync(data.password, saltRounds);
  data.password = hashPassword;

  await db.User.create(data);

  res.json({
      message: "berhasil regis",
    
  });
});

module.exports = route;

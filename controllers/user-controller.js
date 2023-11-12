const bcrypt = require("bcrypt");
const User = require("../models/Users");
const Todo = require("../models/Todos");

const db = require("../models/index");



module.exports = {
  getAllUser: async (req, res) => {
    const users = await db.User.findAll();

    res.json({
      message: "berhasil mendapatkan data user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await db.User.findByPk(id);

    res.json({
      message: "berhasil mendapatkan user by id",
      data: user,
    });
  },
};

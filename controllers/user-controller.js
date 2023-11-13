const User = require("../models/Users");
const db = require("../models/index");



module.exports = {
  getAllUser: async (req, res) => {
    const users = await db.Users.findAll();

    res.json({
      message: "berhasil mendapatkan data user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await db.Users.findByPk(id);

    res.json({
      message: "berhasil mendapatkan user by id",
      data: user,
    });
  },
};

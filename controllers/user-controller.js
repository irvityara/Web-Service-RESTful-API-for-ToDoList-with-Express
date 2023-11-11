const bcrypt = require('bcrypt');
const User = require("../models/User");

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.findAll({include: User})
  
        res.json({
            message: "berhasil mendapatkan data user",
            data: users
        })
    },
  
    getUserById: async (req, res) => {
        const { id } = req.params
        const user = await Users.find(user => user.id == id)
        res.json({
            message: "berhasil mendapatkan user by id",
            data: user
        })
    },

    createUser : async (req, res) => {
        let data = req.body
    
        try {
          const hashPassword = bcrypt.hashSync(data.password, 10)
          data.password = hashPassword
    
          await User.create(data)
    
          res.status(201).json({
            message: "berhasil menambahkan user"
          })
          
        } catch {
          res.json({
            message: "gagal menambahkan user"
          })
        }
      },

}
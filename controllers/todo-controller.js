const Todo = require("../models/Todos");

module.exports = {
    getAllTodo: (req, res) => {
        res.status(200).json({
            message: "berhasil mendapatkan data todo",
            data: Todo
        })
    },
    getTodoById: (req, res) => {

    },
    addTodo: (req, res) => {

    },
    editTodoById: (req, res) => {

    },
    deleteTodoById: (req, res) => {

    },
}
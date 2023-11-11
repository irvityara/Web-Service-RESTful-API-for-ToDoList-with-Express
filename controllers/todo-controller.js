const Todos = require("../models/Todos");
const Todo = require("../models/Todos");

module.exports = {
    getAllTodo: (req, res) => {
        res.status(200).json({
            message: "berhasil mendapatkan data todo",
            data: Todos
        })
    },
    getTodoById: (req, res) => {
        const {id} = req.params
        const todo = Todos.find(todo => todo.id == id)

        res.json({
            message: "berhasil mendapatkan todo by id",
            data: todo
        })
    },

    addTodo: (req, res) => {
        const data = req.body

        const newTodo = {
            id: Todos[Todos.length - 1].id + 1,
            value: data.value,
        }

        Todos.push(newTodo)

        res.status(201).json({
            message: "berhasil menambahkan todo baru",
            data: Todos
        })
    },
    editTodoById: (req, res) => {
        const { id } = req.params;
        const { value, status } = req.body;
        const index = Todos.findIndex((todo) => todo.id = id);
        Todos[index] = { id, value, status };

        res.json({
            message: "berhasil mengubah data todo",
            data: Todos
        })


    },
    deleteTodoById: (req, res) => {

    },
}
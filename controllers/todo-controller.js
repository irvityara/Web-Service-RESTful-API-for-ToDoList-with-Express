const Todos = require("../models/Todos");
const Todo = require("../models/Todos");

module.exports = {
    getAllTodo: async (req, res) => {
        const todos = await Todo.findAll

        res.json({
            message: "berhasil mendapatkan data todo",
            data: todos
        })
    },
    getTodoById: async(req, res) => {
        const {id} = req.params
        const todo = await Todos.find(todo => todo.id == id)

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
    
    editTodoById: async (req, res) => {
        const { id } = req.params;
        const { value, status } = req.body;

        const index = await Todos.find((todo) => todo.id = id);
        Todos[index] = { id, value, status };

        index.id = id || index.id;
        index.value = value || index.value;
        index.status = status !== undefined ? status : index.status;

        await index.save();
        
        res.json({
            message: "berhasil mengubah data todo",
            data: Todos
        })


    },
    deleteTodoById: async(req, res) => {
        const {id} = req.params
        const todos = await Todo.findAll

        try {
            const todo = await Todos.find(todo => todo.id == id)
            
            if (!todo) {
                res.json({
                    message: "Todo not found."
                })
            }

            await todo.destroy();

            res.json({
                message: "berhasil menghapus todo by id",
                data: todos
            })
        } catch {
            res.json({
                message: "Cannot delete todo",
                data: todos
            })
        }
    },

    deleteAllTodo: async (req, res) => {
        const todos = await Todo.findAll

        await todos.destroy();

        res.json({
            message: "berhasil menghapus seluruh daftar todo",
            data: todos
        })
    },
}
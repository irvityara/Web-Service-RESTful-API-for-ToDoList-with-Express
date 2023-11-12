const db = require("../models");
const Todo = require("../models/Todos");
const User = require("../models/Users");



module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await db.Todo.findAll();

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos,
    });
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    const todo = await db.Todo.findByPk(id);

    res.json({
      message: "berhasil mendapatkan todo by id",
      data: todo,
    });
  },

  addTodo: async (req, res) => {
    let data = req.body;

    try {
      const newTodo = {
        id: db.Todo[Todo.length - 1].id + 1,
        value: data.value,
      };

      await db.Todo.push(newTodo);

      res.status(201).json({
        message: "berhasil menambahkan todo baru",
        data: Todo,
      });
        
    } catch (error) {
      res.json({
        message: "gagal menambahkan todo baru",
        error: error.message,
      });
    }
  },

  editTodoById: async (req, res) => {
    const { id } = req.params;
    const { value, status } = req.body;

    const index = await db.Todo.findByPk(id);
    db.Todo[index] = { id, value, status };

    index.id = id || index.id;
    index.value = value || index.value;
    index.status = status !== undefined ? status : index.status;

    await index.save();

    res.json({
      message: "berhasil mengubah data todo",
      data: Todo,
    });
  },

  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    
    try {
      const todo = await db.Todo.findByPk(id);

      if (!todo) {
        res.json({
          message: "Todo not found.",
        });
      }

      await todo.destroy();

      const todos = await db.Todo.findAll();

      res.json({
        message: "berhasil menghapus todo by id",
        data: todos,
      });

    } catch {
      res.json({
        message: "Cannot delete todo"
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    const todos = await db.Todo.findAll();

    try {
      if (!todos) {
        res.json({
          message: "Todos not found.",
        });
      }

      await todos.destroy();

      res.json({
        message: "berhasil menghapus seluruh daftar todo",
      });

    } catch {
      res.json({
        message: "Cannot delete todo",
        data: todos
      });
    }
  },
};

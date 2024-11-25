import Todo from '../models/todoModel.js'

//Get all todos

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
}

const createTodo = async (req, res) => {
    const { title, description } = req.body
    const newTodo = new Todo({ title, description })
    try {
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

//get todo by id

const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json(todo)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export { getAllTodos, createTodo, getTodoById }
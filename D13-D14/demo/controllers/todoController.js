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
    console.log(req.body)
    const { title, description } = req.body
    console.log(title)
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

//update todo

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params
        const { title, description } = req.body
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description })
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//delete todo

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const deletedTodo = await Todo.findByIdAndDelete(id)
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" })
        }
        //res message
        res.status(200).json({ message: "Todo deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo }
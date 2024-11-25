import express from 'express'

import { getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo } from '../controllers/todoController.js'

const router = express.Router()

//get all todos
router.get('/', getAllTodos)
//create todo
router.post('/', createTodo)
//get todo by id
router.get('/:id', getTodoById)
//update todo
router.put('/:id', updateTodo)
//delete todo
router.delete('/:id', deleteTodo)

export default router
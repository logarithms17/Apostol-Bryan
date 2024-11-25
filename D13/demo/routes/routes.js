import express from 'express'

import { getAllTodos, createTodo, getTodoById } from '../controllers/todoController.js'

const router = express.Router()

//get all todos
router.get('/', getAllTodos)
//create todo
router.post('/', createTodo)
//get todo by id
router.get('/:id', getTodoById)

export default router
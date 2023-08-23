const express = require('express');

const getTodosController = require('../controllers/getTodosController');
const addTodosController = require('../controllers/addTodosController');
const deleteTodosController = require('../controllers/deleteTodosController');
const updateTodosController = require('../controllers/updateTodosController');

const todosRouter = express.Router();

todosRouter.get('/get-todos', getTodosController);
todosRouter.post('/add-todos', addTodosController);
todosRouter.delete('/delete-todos', deleteTodosController);
todosRouter.put('/update-todos', updateTodosController);

module.exports = todosRouter;
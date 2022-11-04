const express = require ('express');
const { getTask, createTask, deleteTask, updateTask } = require('../controllers/taskController.js');
const User = require('../models/schema.js');
const router = express.Router();

router.get('/api/profile/:id', getTask)

router.post('/api/register', createTask)

router.get('/api/delete/:id', deleteTask)

router.get('/api/update/:id', updateTask)

module.exports = router
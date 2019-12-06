const express = require('express');
const routes = express.Router();
const StudentController = require('../controllers/StudentController')

routes.get('/', StudentController.index)
routes.get('/allStudents', StudentController.allStudents)
routes.get('/:id', StudentController.show)
routes.post('/', StudentController.store)
routes.put("/:id", StudentController.update)
routes.delete("/:id", StudentController.destroy)


module.exports = routes;
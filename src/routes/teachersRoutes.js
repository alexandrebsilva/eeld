const express = require('express');
const routes = express.Router();
const TeacherController = require('../controllers/TeacherController')

routes.get('/', TeacherController.index)
routes.get('/allTeachers', TeacherController.allTeachers)
routes.get('/:id', TeacherController.show)
routes.post('/', TeacherController.store)
routes.put("/:id", TeacherController.update)
routes.delete("/:id", TeacherController.destroy)

module.exports = routes;
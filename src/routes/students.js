import StudentController from '../controllers/StudentController';
const express = require('express');
const routes = express.Router();


routes.get('/students', StudentController.index)
routes.get('/allStudents', StudentController.allStudents)
routes.get('/students/:id', StudentController.show)
routes.post('/students', StudentController.store)
routes.put("/students/:id", StudentController.update)
routes.delete("/students/:id", StudentController.destroy)
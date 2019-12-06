const express = require('express');
const routes = express.Router();
const SubjectController = require('../controllers/SubjectController')

routes.get('/', SubjectController.index)
routes.get('/allSubjects', SubjectController.allSubjects)
routes.get('/:id', SubjectController.show)
routes.post('/', SubjectController.store)
routes.put("/:id", SubjectController.update)
routes.delete("/:id", SubjectController.destroy)


module.exports = routes;
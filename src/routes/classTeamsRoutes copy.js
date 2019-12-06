const express = require('express');
const routes = express.Router();
const ClassTeamController = require('../controllers/ClassTeamController')

routes.get('/', ClassTeamController.index)
routes.get('/allClassTeams', ClassTeamController.allClassTeams)
routes.get('/:id', ClassTeamController.show)
routes.get('/availableStudents/:id', ClassTeamController.availableStudents)
routes.post('/addStudent', ClassTeamController.addStudent)
routes.post('/removeStudent', ClassTeamController.removeStudent)
routes.post('/', ClassTeamController.store)
routes.put("/:id", ClassTeamController.update)
routes.delete("/:id", ClassTeamController.destroy)


module.exports = routes;
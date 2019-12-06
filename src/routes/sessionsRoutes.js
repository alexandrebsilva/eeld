const express = require('express');
const routes = express.Router();
const SessionController = require('../controllers/SessionController')

routes.get('/', SessionController.index)
routes.get('/allSessions', SessionController.allTeachers)
routes.get('/:id', SessionController.show)
routes.get('/period/:id', SessionController.sessionsByPeriodId)
routes.post('/', SessionController.store)
routes.put("/:id", SessionController.update)
routes.delete("/:id", SessionController.destroy)

module.exports = routes;
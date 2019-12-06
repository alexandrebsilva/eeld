const express = require('express');
const routes = express.Router();
const PeriodController = require('../controllers/PeriodController')

routes.get('/', PeriodController.index)
routes.get('/allPeriods', PeriodController.allPeriods)
routes.get('/:id', PeriodController.show)
routes.get('/availableClassTeamPeriod/:id', PeriodController.availableClassTeamPeriod)
routes.get('/availableTeacherPeriod/:id', PeriodController.availableTeacherPeriod)
routes.get('/:id', PeriodController.show)
routes.post('/', PeriodController.store)
routes.put("/:id", PeriodController.update)
routes.post("/addClassTeam", PeriodController.addClassTeam)
routes.post("/addSubject", PeriodController.addSubject)
routes.post("/addTeacher", PeriodController.addTeacher)
routes.delete("/:id", PeriodController.destroy)


module.exports = routes;
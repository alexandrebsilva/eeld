const express = require('express');
const routes = express.Router();

const StudentController = require('./controllers/StudentController');
const ClassTeamController = require('./controllers/ClassTeamController');
const TeacherController = require('./controllers/TeacherController');
const SubjectController = require('./controllers/SubjectController');
const PeriodController = require('./controllers/PeriodController')
const SessionController = require('./controllers/SessionController')

const students = require('./routes/studentsRoutes')
routes.use('/students', students)


routes.get('/classTeams', ClassTeamController.index)
routes.get('/classteams/allClassTeams', ClassTeamController.allClassTeams)
routes.get('/classTeams/:id', ClassTeamController.show)
routes.get('/classTeams/availableStudents/:id', ClassTeamController.availableStudents)
routes.post('/classTeams/addStudent', ClassTeamController.addStudent)
routes.post('/classTeams/removeStudent', ClassTeamController.removeStudent)
routes.post('/classTeams', ClassTeamController.store)
routes.put("/classTeams/:id", ClassTeamController.update)
routes.delete("/classTeams/:id", ClassTeamController.destroy)

routes.get('/subjects', SubjectController.index)
routes.get('/allSubjects', SubjectController.allSubjects)
routes.get('/subjects/:id', SubjectController.show)
routes.post('/subjects', SubjectController.store)
routes.put("/subjects/:id", SubjectController.update)
routes.delete("/subjects/:id", SubjectController.destroy)

routes.get('/teachers', TeacherController.index)
routes.get('/allTeachers', TeacherController.allTeachers)
routes.get('/teachers/:id', TeacherController.show)
routes.post('/teachers', TeacherController.store)
routes.put("/teachers/:id", TeacherController.update)
routes.delete("/teachers/:id", TeacherController.destroy)

routes.get('/sessions', SessionController.index)
routes.get('/allSessions', SessionController.allTeachers)
routes.get('/sessions/:id', SessionController.show)
routes.get('/sessions/period/:id', SessionController.sessionsByPeriodId)
routes.post('/sessions', SessionController.store)
routes.put("/sessions/:id", SessionController.update)
routes.delete("/sessions/:id", SessionController.destroy)

routes.get('/periods', PeriodController.index)
routes.get('/allPeriods', PeriodController.allPeriods)
routes.get('/periods/:id', PeriodController.show)
routes.get('/periods/availableClassTeamPeriod/:id', PeriodController.availableClassTeamPeriod)
routes.get('/periods/availableTeacherPeriod/:id', PeriodController.availableTeacherPeriod)
routes.get('/periods/:id', PeriodController.show)
routes.post('/periods', PeriodController.store)
routes.put("/periods/:id", PeriodController.update)
routes.post("/periods/addClassTeam", PeriodController.addClassTeam)
routes.post("/periods/addSubject", PeriodController.addSubject)
routes.post("/periods/addTeacher", PeriodController.addTeacher)
routes.delete("/periods/:id", PeriodController.destroy)

module.exports = routes;
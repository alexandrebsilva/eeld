const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken')

const ProductController = require('./controllers/ProductController');
const StudentController = require('./controllers/StudentController');
const ClassTeamController = require('./controllers/ClassTeamController');
const TeacherController = require('./controllers/TeacherController');
const SubjectController = require('./controllers/SubjectController');
const PeriodController = require('./controllers/PeriodController')

routes.post('/login', function(req, res){
    const user = {id:3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({token:token})
})

function ensureToken(req, res, next) {
    const bearerHeader =  req.headers["auhorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else {
        res.sendStatus(403);
    }
}

routes.get('/protectedRoute', ensureToken, function(req, res){
    jwt.verify(req.token), 'my_secret_key', function(err, data){
        if(err){
            res.sendStatus(403);
        }else {
            res.json({
                text:'rota protegida',
                data:data
            });
        }
    }
}),

routes.get('/students', StudentController.index)
routes.get('/allStudents', StudentController.allStudents)
routes.get('/students/:id', StudentController.show)
routes.post('/students', StudentController.store)
routes.put("/students/:id", StudentController.update)
routes.delete("/students/:id", StudentController.destroy)

routes.get('/classTeams', ClassTeamController.index)
routes.get('/allClassTeams', ClassTeamController.allClassTeams)
routes.get('/classTeams/:id', ClassTeamController.show)
routes.get('/classTeams/addStudent', ClassTeamController.addStudent)
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

routes.get('/periods', PeriodController.index)
routes.get('/allPeriods', PeriodController.allPeriods)
routes.get('/periods/:id', PeriodController.show)
routes.post('/periods', PeriodController.store)
routes.put("/periods/:id", PeriodController.update)
routes.post("/periods/addClassTeam", PeriodController.addClassTeam)
routes.post("/periods/addSubject", PeriodController.addSubject)
routes.post("/periods/addTeacher", PeriodController.addTeacher)
routes.delete("/periods/:id", PeriodController.destroy)

 module.exports = routes;
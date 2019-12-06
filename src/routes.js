const express = require('express');
const routes = express.Router();

//Prefixos das rotas - arquivos de rotas
routes.use('/students', require('./routes/studentsRoutes'));
routes.use('/classTeams', require('./routes/periodsRoutes'));
routes.use('/subjects', require('./routes/subjectsRoutes'));
routes.use('/teachers', require('./routes/teachersRoutes'));
routes.use('/sessions', require('./routes/sessionsRoutes'));
routes.use('/periods', require('./routes/periodsRoutes'));

module.exports = routes;
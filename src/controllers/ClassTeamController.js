const mongoose = require('mongoose');
const ClassTeam = mongoose.model('ClassTeam');
const Student = mongoose.model('Student');
const Teacher = mongoose.model('Teacher');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const classTeams = await ClassTeam.paginate({},{page:page, limit:10} );

        return res.json(classTeams);
    },
    
    async allClassTeams(req, res) {
        const classTeams = await ClassTeam.find();

        return res.json(classTeams);
    },

    async store (req, res) {
        const classTeam = await ClassTeam.create(req.body);

        return res.json(classTeam);
    },

    async show (req, res) {
        const classTeam = await ClassTeam.findById(req.params.id);  

        return res.json(classTeam);
    },

    async addStudent (req, res) {
        const student = await Student.findById(req.body.student_id);
        //res.json(student)
        const classTeam = await ClassTeam.findById(req.body.classTeam_id);

        await classTeam.update({$push:{students:student}});

        return res.json(classTeam);
    },

    async removeStudent (req, res) {
        const student = await Student.findById(req.body.student_id);
        //res.json(student)
        const classTeam = await ClassTeam.findById(req.body.classTeam_id);
        
        await classTeam.update({$pull:{students:student._id}});

        return res.json(classTeam);
    },

    //nao utilizada
    async addTeacher (req, res) {
        const teacher = await Teacher.findById(req.body.teacher_id);
        const classTeam = await ClassTeam.findById(req.body.classTeam.id);
        
        await classTeam.update({$push:{classTeams:classTeam}});
        return res.json(classTeam);
    },

    async update (req, res){
        const classTeam = await ClassTeam.findByIdAndUpdate(req.params.id, req.body, {new: true});
        
        return res.json(classTeam);
    },

    async destroy (req, res){
        await ClassTeam.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    }
}
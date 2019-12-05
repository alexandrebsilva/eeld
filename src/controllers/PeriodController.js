const mongoose = require('mongoose');
const Period = mongoose.model('Period');
const ClassTeam = mongoose.model('ClassTeam');
const Subject = mongoose.model('Subject');
const Teacher = mongoose.model('Teacher');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const periods = await Period.paginate({},{page:page, limit:10} );

        return res.json(periods);
    },

    async allPeriods(req, res) { 
        const periods = await Period.find();

        return res.json(periods);
    },

    async store (req, res) {
        const period = await Period.create(req.body);

        return res.json(period);
    },

    async show (req, res) {
        const period = await Period.findById(req.params.id);  

        return res.json(period);
    },

    async update (req, res){
        const period = await Period.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(period);
    },

    async destroy (req, res){
        await Period.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    },

    async addClassTeam (req, res){
        const classTeam = await ClassTeam.findById(req.body.classTeam_id);
        const period = await Period.findById(req.body.period_id)
        
        await period.update({$push:{classTeams:classTeam}});
        
        return res.json(period);
    },

    async addSubject (req, res){
        const subject = await Subject.findById(req.body.subject_id);
        const period = await Period.findById(req.body.period_id)
        
        await period.update({subject:subject});
        
        return res.json(period);
    },
    
    async addTeacher (req, res) {
        const teacher = await Teacher.findById(req.body.teacher_id);
        const period = await Period.findById(req.body.period_id)
        
        await period.update({$push:{teacher:teacher}});
        
        return res.json(period);
    }
}
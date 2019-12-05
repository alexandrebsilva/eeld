const mongoose = require('mongoose');
const Teacher = mongoose.model('Teacher');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const teachers = await Teacher.paginate({},{page:page, limit:10} );

        return res.json(teachers);
    },
    async allTeachers(req, res) {
        const teachers = await Teacher.find();

        return res.json(teachers);
    },


    async store (req, res) {
        const teacher = await Teacher.create(req.body);

        return res.json(teacher);
    },

    async show (req, res) {
        const teacher = await Teacher.findById(req.params.id);  

        return res.json(teacher);
    },

    async update (req, res){
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(teacher);
    },

    async destroy (req, res){
        await Teacher.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    }
}
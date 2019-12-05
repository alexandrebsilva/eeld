const mongoose = require('mongoose');
const Student = mongoose.model('Student');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const students = await Student.paginate({},{page:page, limit:10} );

        return res.json(students);
    },
    async allStudents(req, res) {
        const students = await Student.find();

        return res.json(students);
    },

    async store (req, res) {
        const student = await Student.create(req.body);

        return res.json(student);
    },

    async show (req, res) {
        const student = await Student.findById(req.params.id);  

        return res.json(student);
    },

    async update (req, res){
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(student);
    },

    async destroy (req, res){
        await Student.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    }
}
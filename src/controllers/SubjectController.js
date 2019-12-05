const mongoose = require('mongoose');
const Subject = mongoose.model('Subject');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const subjects = await Subject.paginate({},{page:page, limit:10} );

        return res.json(subjects);
    },
    async allSubjects(req, res) {
        const subjects = await Subject.find();

        return res.json(subjects);
    },

    async store (req, res) {
        const subject = await Subject.create(req.body);

        return res.json(subject);
    },

    async show (req, res) {
        const subject = await Subject.findById(req.params.id);  

        return res.json(subject);
    },

    async update (req, res){
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(subject);
    },

    async destroy (req, res){
        await Subject.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    }
}
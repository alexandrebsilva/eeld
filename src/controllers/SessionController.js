const mongoose = require('mongoose');
const Session = mongoose.model('Session');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const teachers = await Session.paginate({},{page:page, limit:10} );

        return res.json(teachers);
    },
    async allTeachers(req, res) {
        const teachers = await Session.find();

        return res.json(teachers);
    },


    async store (req, res) {
        const session = await Session.create(req.body);

        return res.json(session);
    },

    async show (req, res) {
        const session = await Session.findById(req.params.id);  

        return res.json(session);
    },

    async update (req, res){
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(session);
    },

    async destroy (req, res){
        await Session.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    },
}
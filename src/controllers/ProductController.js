const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        //desestruturação é quando vc tem uma propriedade que sera extraida do obj com o mesmo nome
        // nesse caso page, que vem com o valor default de 1
        const { page = 1} = req.query;
        
        //paginação
        //primeiro obj é onde colocaria os filtros wheres... 
        const products = await Product.paginate({},{page:page, limit:10} );

        return res.json(products);
    },

    async store (req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show (req, res) {
        const product = await Product.findById(req.params.id);  
        return res.json(product);
    },

    async update (req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    async destroy (req, res){
        await Product.findByIdAndDelete(req.params.id);

        return res.json({'success':true})
    }
}
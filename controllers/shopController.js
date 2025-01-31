const product = require("../models/product");
const mark = require("../models/mark");

module.exports = {
    addProduct: async (req,res) => {
        const newProduct = await product.create(req.body);
        res.json(newProduct);
    },

    getProducts: async (req,res) => {
        const products = await product.findAll();
        res.json(products);
    },

    getProduct: async (req,res) => {
        const product = await product.findByPk(req.params.id);
        res.json(product);
    },

    deleteProduct: async (req,res) => {
        const elimatedProduct = await product.destroy({where:req.params});
        res.json(elimatedProduct);
    },

    deleteMark: async (req,res) => {
        console.log(req.params.markName)
        const elimnateProduct = await product.destroy({where:{mark:req.params.markName}})
        const elimatedMark = await mark.destroy({where:req.params});
        res.json(elimatedMark, elimnateProduct);
    },

    addMark: async (req,res) => {
        const newMark = await mark.create(req.body);
        res.json(newMark);
    },

    getMark: async (req,res) => {
        const findMark = await mark.findByPk(req.params.CIF);
        console.log(findMark.toJSON())
        res.json(findMark.toJSON());

    },

    deleteMark: async (req,res) => {
        const elimatedMark = await mark.destroy({where:req.params});
        const elimatedProduct = await product.destroy({where:req.params});
        res.json(elimatedMark,elimatedProduct);
    },





}






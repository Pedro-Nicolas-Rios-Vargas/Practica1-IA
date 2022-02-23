const Jerarquic = require("../models/Jerarquic");

const getJerarquic = async(req, res) => {
    const jerarquics = await Jerarquic.find().populate(["item", "wins"]);
    res.send(jerarquics)
};


const getOneJerarquic = async(req, res) => {
    const { item } = req.params;

    const jerarquic = await Jerarquic.findOne({
        item
    }).populate(['item','wins']);

    res.send(jerarquic);
}

const createJerarquic = async(req, res) => {

    const { item, wins } = req.body;
    
    const jerarquic = new Jerarquic({
        item,
        wins
    });

    await jerarquic.save();

    res.send({
        status:"Jerarquic created successfully",
        jerarquic
    });
}; 

module.exports = {
    getJerarquic,
    getOneJerarquic,
    createJerarquic
}
const Game = require("../models/Game");
const Jerarquic = require("../models/Jerarquic");

const getMany = async(req, res) => {
    const games = await Game.find().populate('winner');
    res.send(games);
};

const createOne = async(req, res) => {
    const { playerItem} = req.body;

    //Aqui debe decidir la pc que tirada dar
    const pcItem = "620e6d11ba296f613a8ef130";

    const item = await Jerarquic.findOne({
        item: playerItem
    });

    const winner = item.wins.find(item => item == pcItem);

    if(winner)
        console.log("GANA JUGADOR");
    else    
     console.log("GANA PC");


    res.send(item);
}

module.exports = {
    getMany,
    createOne
};
const Player = require("../models/Player");

const getPlayers = async(req, res) => {
    const players = await Player.find();
    res.send(players);
};

const createPlayer = async(req, res) => {
    const { username } = req.body;
    const player = new Player({ username });
    await player.save();

    res.send({
        status: "Player created successfully",
        player
    });
} 

module.exports = {
    getPlayers,
    createPlayer

}
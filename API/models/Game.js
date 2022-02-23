const mongoose = require('mongoose');

const  Game = mongoose.Schema({
    playerItem: String,
    pcItem: String,
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Player",
        required: true
    }
});

module.exports = mongoose.model("Game", Game);
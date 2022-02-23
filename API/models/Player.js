const mongoose = require('mongoose');

const Player = mongoose.Schema({
    username: String,
});

module.exports = mongoose.model("Player", Player);
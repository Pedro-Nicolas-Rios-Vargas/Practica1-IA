const mongoose = require('mongoose');

const  Item = mongoose.Schema({
    name: String,
    icon: String
});

module.exports = mongoose.model("Item", Item);
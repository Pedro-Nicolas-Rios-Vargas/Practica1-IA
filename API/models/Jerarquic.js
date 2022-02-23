const mongoose = require('mongoose');

const  Jerarquic = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required: true
    },
    wins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Item",
        required: true
    }]
});

module.exports = mongoose.model("Jerarquic", Jerarquic);
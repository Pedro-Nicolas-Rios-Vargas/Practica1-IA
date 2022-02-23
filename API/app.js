const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

const items = require('./routes/item.routes');
const players = require('./routes/player.routes');
const jerarquics = require('./routes/jerarquic.routes');
const games = require('./routes/game.routes');

//Middlewares
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

//Routes
app.use('/items', items);
app.use('/players', players);
app.use('/jerarquics', jerarquics);
app.use('/games', games);

//DB
mongoose
    .connect("mongodb://localhost:27017/papper-rock-scissors", { useNewUrlParser: true })
    .then( () => {
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    });
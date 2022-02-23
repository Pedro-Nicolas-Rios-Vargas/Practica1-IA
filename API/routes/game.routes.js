const express = require('express');
const { getMany, createOne } = require('../controllers/game.controller');
const router = express.Router();

router.get("/", getMany);
router.post("/", createOne);

module.exports = router;
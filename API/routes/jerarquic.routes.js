const express = require('express');
const { getJerarquic, createJerarquic, getOneJerarquic } = require('../controllers/jerarquic.controller');
const router = express.Router();

router.get("/", getJerarquic);
router.get('/:item', getOneJerarquic);
router.post("/", createJerarquic);

module.exports = router;
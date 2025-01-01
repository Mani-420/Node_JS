const express = require('express');
const router = express.Router();
const {handleGenerateNewShortURL} = require('../controllers/control');

router.post('/', handleGenerateNewShortURL);

module.exports = router;

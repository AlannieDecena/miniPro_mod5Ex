const animeController = require('../controllers/animeController')
const express = require('express')
const router = express.Router();


router.get('/test', (req, res) => {
    res.send('it works')
    console.log('it works')
})
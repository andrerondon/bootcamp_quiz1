const express = require('express')
const controller = require('../controllers')


const router = express.Router()

router.get('/', (req, res) => {
    res.render('events/newevent')
    // res.send('Your USER')
})

module.exports = router
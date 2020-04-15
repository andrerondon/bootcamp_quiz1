const express = require('express')



const router = express.Router()

router.get('/sing_in', (req, res) => {
    res.render('users/singin')
    // res.send('Your are login page')
})
router.post('/sing_in', (req, res) =>{
    const oneDay = 1000 * 60 * 60 * 24
    const params = req.body   // geting from url 
    res.cookie('username', params.full_name, {maxAge: oneDay})     // sending username as a cookie
    res.send('You are Loged IN')

})

router.delete('/loggedout', (req, res) => {
    res.clearCookie('username') // res.clearCookie will tell the browser to remove a cookie from it's store
    res.send('logged out')
  })

module.exports = router
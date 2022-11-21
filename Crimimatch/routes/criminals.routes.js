const router = require('express').Router()
const axios = require('axios')

const criminalApi = require('./../services/criminal-api.service')
const Api = new criminalApi()

router.get('/api', (req, res, next) => {
    axios.get('https://api.fbi.gov/wanted')
        .then(responseFromAPI => {
            console.log('RESPONSE', responseFromAPI.data)
            res.render('criminal/list', { total: responseFromAPI.data })
        })
        .catch(err => console.error('ERROR', err))
})


module.exports = router
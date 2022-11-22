const router = require('express').Router()
const axios = require('axios')

const criminalApi = require('./../services/criminal-api.service')
const Api = new criminalApi()


// TRAER INFO DE LA API

router.get('/api', (req, res, next) => {

    fetch('https://api.fbi.gov/wanted/v1/list')
        .then(res => res.json())
        .then(responseFromAPI => {
            // console.log('RESPONSE------------------------------------', responseFromAPI.items)
            const arr = responseFromAPI.items
            res.render('criminal/list', { arr })
        })
        .catch(err => console.error(err))
})

//LISTADO

router.get('/', (req, res, next) => {

    const { title } = req.body
})


module.exports = router
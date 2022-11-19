const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const News = require('../models/News.model')

router.get('/create', (req, res, next) => {
    res.render('news/create')
});

router.post('/create', (req, res, next) => {

    const { header, image, body, link } = req.body

    News
        .create({ header, image, body, link })
        .then(news => {
            // console.log(news)
            res.redirect('/news/list')
        })
        .catch(err => res.redirect('/news/create')
        )

})

router.get('/list', (req, res, next) => {

    News
        .find()
        .select({ header: 1 })
        .then(news => {
            res.render('news/list', { news })
        })

});

router.get('/:id', (req, res, next) => {
    const { id: news_Id } = req.params


    News
        .findById(news_Id)
        .then(newsDetails => {
            // console.log(newsDetails)
            res.render('news/details', {
                newsDetails,
                isAdmin: req.session.currentUser.role === 'ADMIN',
            })
        })
})

router.post('/:id/delete', (req, res, next) => {

    const { id: news_Id } = req.params

    News
        .findByIdAndDelete(news_Id)
        .then(() => res.redirect('/news/list'))
        .catch(err => console.log(err))

})


router.get('/:id/edit', (req, res, next) => {
    const { id: news_Id } = req.params

    News
        .findByIdAndUpdate(news_Id)
        .then(newsDetails => {
            res.render('news/edit', newsDetails)
        })
})

router.post('/:id/edit', (req, res, next) => {

    const { header, image, body, link } = req.body
    const { id: news_Id } = req.params

    News
        .findByIdAndUpdate(news_Id, { header, image, body, link })
        .then(() => {
            res.redirect(`/news/${news_Id}`)
        })
        .catch(err => console.log(err))

})






module.exports = router;

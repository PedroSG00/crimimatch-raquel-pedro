const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const News = require('../models/News.model')
const Comments = require('../models/Comments.model')
const { loggedIn, loggedOut, checkRoles } = require('../middleware/route-guard')

// router.get('/:id/create-comment', (req, res, next) => {
//     const { id: news_Id } = req.params
//     const { author, text } = req.body

//     Comments
//         .create({ author, text })
//         .then(comment => {
//             res.render(`/news/${news_Id}`, comment)
//         })
//         .catch(err => console.log(err))
// });

router.post('/:id/create-comment', (req, res, next) => {
    const { id: news_Id } = req.params
    const { author, text } = req.body

    Comments
        .create(news_Id, { author, text })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))



})

module.exports = router;



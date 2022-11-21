const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const New = require('../models/New.model')
const Comment = require('../models/Comment.model')
const { loggedIn, loggedOut, checkRoles } = require('../middleware/route-guard')


router.post('/:id', (req, res, next) => {

    const { id: news_Id } = req.params
    const { author, text } = req.body

    Comment
        .create({ author: req.session.currentUser._id, text })
        .then(createdComment => {

            New
                .findByIdAndUpdate(news_Id, { author: req.session.currentUser._id, text })
                .then((commentedNew) => {
                    return (commentedNew)
                })
        })
        .then(res.redirect(`/${news_Id}`))
        .catch(err => console.log(err))
})



module.exports = router;



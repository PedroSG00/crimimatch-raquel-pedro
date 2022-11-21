const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const New = require('../models/New.model')
const Comment = require('../models/Comment.model')
const { loggedIn, loggedOut, checkRoles } = require('../middleware/route-guard')


router.post('/:id', (req, res, next) => {

    const { id: news_Id } = req.params
    const { text } = req.body
    // const { comments } = req.body

    Comment
        .create({ author: req.session.currentUser._id, text })

        .then((newComment) => {
            return New.findByIdAndUpdate(news_Id, { $push: { comments: newComment._id } })
        })
        .then(res.redirect(`/news/${news_Id}`))
        .catch(err => console.log(err))
})

router.post('/:comment_id/delete-comment', (req, res, next) => {

    const { comment_id } = req.params

    Comment
        .findByIdAndDelete(comment_id)
        .then((deletedComment) => {
            console.log('---------------------------------', deletedComment._id, '----------------------------------')
            return New.findByIdAndDelete({ comments: deletedComment._id })
        })
        .then(res.redirect(`/news/list`))
        .catch(err => console.log(err))

})


module.exports = router;



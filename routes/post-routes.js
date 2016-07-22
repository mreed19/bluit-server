var router = require('express').Router();
var Post = require('../models/post');

router.get('/', (req, res) => {
  Post
    .find()
    .sort({ updated_at: 'desc' })
    .then(posts => res.json(posts));
});

router.post('/', (req, res) => {
  var post = new Post({
    title: req.body.title,
    link_url: req.body.link_url,
    body: req.body.body
  });

  post
    .save()
    .then(
      postData => {
        res.json({
          message: 'Successfully created a post',
          post: postData
        });
      }
    );
});

module.exports = router;

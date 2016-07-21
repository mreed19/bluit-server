var router = require('express').Router();
var Post = require('../models/post');

router.get('/', (req, res) => {
  Post
    .find()
    .sort({ updated_at: 'desc' })
    .then(posts => res.json(posts));
});

module.exports = router;

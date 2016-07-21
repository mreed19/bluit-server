var db = require('../config/db');
var postSchema = require('../schemas/post-schema');

module.exports = db.model('Post', postSchema);

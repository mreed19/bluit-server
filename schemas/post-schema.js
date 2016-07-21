var db = require('../config/db');

var postSchema = db.Schema({
  title: String,
  link_url: String,
  body: String,
  updated_at: {type: Date, default: Date.now }
});

postSchema.pre('save', (next) => {
  this.updated_at = Date.now;
  next();
});

module.exports = postSchema;

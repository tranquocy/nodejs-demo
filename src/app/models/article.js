const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Article = new Schema({
  name: { type: String, require: true },
  slug: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, require: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', Article, 'blog')

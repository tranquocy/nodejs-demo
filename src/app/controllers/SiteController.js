const Article = require('../models/article')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteControllers {
  //[GET] /
  index(req, res, next) {
    Article.find({})
    .then(blog => {
      blog = multipleMongooseToObject(blog)
      res.render('home',  { blog })
    })
    .catch(next)
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteControllers();

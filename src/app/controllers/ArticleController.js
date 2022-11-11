const Article = require('../models/article')
const { mongooseToObject } = require('../../utils/mongoose')

class ArticleControllers {
  //[GET] /article/:slug
  show(req, res, next) {
    Article.findOne({ slug: req.params.slug })
    .then(article => {
      article = mongooseToObject(article)
      res.render('articles/show',  { article })
    })
    .catch(next)
  }

  //[GET] /article/create
  create(req, res, next) {
    res.render("articles/create")
  }

  //[POST] /article/store
  store(req, res, next) {
    const formData =  req.body
    formData.slug = req.body.name.trim().replaceAll(" ", "-").toLowerCase()
    const article = new Article(formData)
    article.save()
      .then(() => res.redirect('/'))
  }
}

module.exports = new ArticleControllers();

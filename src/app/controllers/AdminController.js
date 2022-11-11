const Article = require('../models/article')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class AdminControllers {
  //[GET] /admin/list
  articlesList(req, res, next) {
    Article.find({})
    .then(articles => {
      articles = multipleMongooseToObject(articles)
      res.render('admin/list',  { articles })
    })
    .catch(next)
  }

  //[GET] /admin/create
  create(req, res, next) {
    res.render("admin/create")
  }

  //[POST] /admin/store
  store(req, res, next) {
    const formData =  req.body
    formData.slug = req.body.name.trim().replaceAll(" ", "-").toLowerCase()
    const article = new Article(formData)
    article.save()
      .then(() => res.redirect('/'))
  }

  //[POST] /article/update/:id
  updateArticle(req, res, next) {
    Article.findById(req.params.id)
    .then(article => {
      article = mongooseToObject(article)
      res.render('admin/update',  { article })
    })
    .catch(next)
  }

  //[PUT] /article/:id
  update(req, res, next) {
    Article.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.redirect('/admin/list'))
    .catch(next)
  }
}

module.exports = new AdminControllers();

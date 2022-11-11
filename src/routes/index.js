const newsRouter = require('./news');
const siteRouter = require('./site');
const articlesRouter = require('./articles');
const adminRouter = require('./admin');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/articles', articlesRouter);
  app.use('/admin', adminRouter);
  app.use('/', siteRouter);
}

module.exports = route;

const express = require('express');
const router = express.Router();

const articleControllers = require('../app/controllers/ArticleController');

router.get('/:slug', articleControllers.show);

module.exports = router;

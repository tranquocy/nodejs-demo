const express = require('express');
const router = express.Router();

const adminControllers = require('../app/controllers/AdminController');

router.get('/list', adminControllers.articlesList);
router.get('/create', adminControllers.create);
router.post('/create/store', adminControllers.store);
router.put('/articles/:id', adminControllers.update);
router.get('/articles/update/:id', adminControllers.updateArticle);

module.exports = router;

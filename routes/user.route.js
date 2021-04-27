var express = require('express');

var controllers = require('../controller/user.controller');

var router = express.Router();

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', controllers.postCreate);

module.exports = router;
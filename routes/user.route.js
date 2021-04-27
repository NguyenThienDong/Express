var express = require('express');

var controllers = require('../controller/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', validate.postCreate, controllers.postCreate);

module.exports = router;
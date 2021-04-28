var express = require('express');

var controllers = require('../controller/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/', controllers.index);

router.get('/cookie', function (req, res, next) {
	res.cookie('user-id', 12345);
	res.send('Hello');
});

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.get);

router.post('/create', validate.postCreate, controllers.postCreate);

module.exports = router;
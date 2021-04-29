var express = require('express');

var controllers = require('../controller/auth.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/login', controllers.login);
router.post('/login', controllers.postLogin);

module.exports = router;
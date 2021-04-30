var express = require('express');
var cookieParser = require('cookie-parser');

var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.use(cookieParser('tgdghfdfifnjnf2346'));

app.get('/', (req, res) => {
  res.render('index', {
  	name: 'Dong'
  });
});


app.use('/users', authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost` + port);
});
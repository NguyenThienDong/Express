var express = require('express');

var userRouter = require('./routes/user.route');

var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
  	name: 'Dong'
  });
});


app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost` + port);
});
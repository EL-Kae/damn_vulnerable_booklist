const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const helmet = require('helmet');
const uuidv4 = require('uuid/v4');
var mysql = require('mysql');

const app = express();

const mycon = mysql.createConnection({ host: host, user: user, database: db });
mycon.connect(function(err) {
  mycon.query('SELECT * FROM users WHERE id = ' + userinput, (err, res) => {});
});

app.use((req, res, next) => {
  res.locals.styleNonce = Buffer.from(uuidv4()).toString('base64')
  next()
})

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'none'"],
  },
  reportOnly:true
}))

app.use(express.static(path.join(__dirname, 'build')));
port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.render('index', {styleNonce: res.locals.styleNonce});
});



app.listen(port, () => console.log(`Starting up server. Listening on port ${port}...`));

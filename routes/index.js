var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'malrabo'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('select * from users', function (err, rows) {
    console.log(rows);
  res.render('index', { title: 'Express Users', users: rows });
});

  //res.render('index', { title: 'Express' });
});

module.exports = router;

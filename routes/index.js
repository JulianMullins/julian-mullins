var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
  	title: 'Julian Mullins',
  	subtitle: "Entrepreneur, Developer & Designer"
  });
});

module.exports = router;
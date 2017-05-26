var express = require('express');
var router = express.Router();

//random language 'hello' text generator
var randomHello = function() {
	var arr = ["hello", "namaste", "hola", "salut", "ciao", "Hallo", "nǐ hǎo", "Ahlan wa Sahlan", "shalom", "marhaba", "olá", "kon'nichiwa", "annyeonghaseyo"];
	var randNum = Math.floor(Math.random()*arr.length);
	return arr[randNum];
}

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
  	title: 'Julian Mullins',
  	subtitle: "Entrepreneur, Developer & Designer",
  	hello: randomHello()
  });
});

module.exports = router;

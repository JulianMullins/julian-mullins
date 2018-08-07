var express = require('express');
var router = express.Router();

var model = require('../models/models');
var Work = model.Work;

// GET home page
router.get('/', function(req, res, next) {

  res.render('index', {
  	title: 'Julian Mullins',
  	subtitle: "Entrepreneur, Developer & Designer",
    work: Work
  });
});

// GET individual work page
router.get('/work/:id', function(req, res, next) {
  var workID = req.params.id;
  var workItem = Work[workID-1];

  res.render('work', {
    work: workItem
  });
});

module.exports = router;

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
router.get('/work/:slug', function(req, res, next) {
  var slug = req.params.slug;
  var workItem;

  for(let i=0; i<Work.length; i++) {
    if(Work[i].slug == slug) {
      workItem = Work[i];
    }
  }

  res.render('work', {
    work: workItem
  });
});

module.exports = router;

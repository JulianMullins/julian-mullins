var express = require('express');
var router = express.Router();

var model = require('../models/models');
var Work = model.Work;
var SelectedWork = model.SelectedWork;

var title = 'Julian Mullins';

// GET home page
router.get('/', function(req, res, next) {

  res.render('index', {
  	title: title,
  	subtitle: "Entrepreneur, Developer & Designer",
    work: Work,
    selectedWork: SelectedWork,
    scrollable: false
  });
});

// GET individual work page
router.get('/:slug', function(req, res, next) {
  var slug = req.params.slug;
  var workItem;

  for(let i=0; i<Work.length; i++) {
    if(Work[i].slug == slug) {
      workItem = Work[i];
    }
  }

  res.render('work', {
    title: title,
    work: workItem,
    scrollable: true
  });
});

module.exports = router;

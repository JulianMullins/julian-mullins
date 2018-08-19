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
  var workItem = [];

  for(let i=0; i<Work.length; i++) {
    if(Work[i].slug == slug) {
      workItem.push(Work[i]);
    }
  }

  if(workItem.length >= 1) {
    res.render('work', {
      title: title,
      work: workItem[0],
      scrollable: true
    });
  } else {
    let error = {
      status: '404 Error',
      stack: null,
      desc: 'Page Not Found'
    }
    res.render('error', {
      error: error,
      message: 'After letting loose the search hounds and checking all the usual spots (including the basement), it is with deep regret that I must inform you this page simply couldn\'t be found.'
    });
  }
});

module.exports = router;

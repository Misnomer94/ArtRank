var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOne({}, function(err, user){
    res.render('index', { title: 'Express', user: user });

    console.log(user);
  });
});

router.get('/vote', function(req, res, next) {
  User.findOne({}, function(err, user){
    res.render('vote', { title: 'Express', user: user });

    console.log(user);
  });
});

router.get('/upload', function(req, res, next) {
  User.findOne({}, function(err, user){
    res.render('upload', { title: 'Express', user: user });

    console.log(user);
  });
});

module.exports = router;

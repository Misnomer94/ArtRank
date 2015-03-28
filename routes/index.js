var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user');

var Content = require('../models/content')

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

router.get('/faq', function(req, res, next) {
  User.findOne({}, function(err, user){
    res.render('faq', { title: 'Express', user: user });

    console.log(user);
  });
});


var Content = require('../models/content');


router.post('/img-upload', function(req,res,next){
  //var db = req.db;
  //var collection = db.get('contents');
  // Submit to the DB
  var t = req.body.title;
  var a = req.body.artist;
  console.log(t);
  console.log(req.body)
  /*var img = new Content({
      "title": t,
      "rank": 300,
      "type": "img",
      "tags": [],
      "artist": a,
      "flags": [],
      "location": "" });

  //img.save(function (err) {
    //if (err) return console.error(err);
    //console.log('woo');
    });*/
});


module.exports = router;

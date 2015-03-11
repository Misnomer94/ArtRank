var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {


  mongoose.model('users').findOne({}, function(err, user){
    res.render('index', { title: 'Express', user: user });

    console.log(user);

  });

});

router.get('/vote', function(req, res, next) {


  res.render('vote', { title: 'Express', user: user });


});













module.exports = router;

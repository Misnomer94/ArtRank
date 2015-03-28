var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Content = require('../models/content');

router.get('/test', function(req, res, next) {
  Content.findOne({}, function(err, content){
    if (err) {
      return res.send(err);
    }

    res.json(content);
  });
});


//route for getting all content of type picture
router.get('/pictures', function(req, res, next){
  Content.find({'type': 'picture'}, function(err, content){
    //if error, send the error
    if(err) {
      return res.send(err);
    }

    //else send the data from MongoDB as JSON response to the client
    res.json(content);
  });
});

//var imgC = mongoose.model('content', contentSchema);

router.post('/img-upload', function(req,res,next){
  var img = new Content({
    title: req.body.title,
    rank: 300,
    type: "img",
    tags: [],
    artist: req.body.artist,
    flags: [],
    location: ""
  });
    img.save(function (err) {if (err) console.log ('Error on save!')});
});

module.exports = router;

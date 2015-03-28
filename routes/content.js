var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Content = require('../models/content');


function getRandom(upperBound){
  return Math.floor(Math.random() * (upperBound));
}

/*Route to query a matchup by type of media and tags*/
router.get('/matchup/:type/:tags', function(req, res, next){
  tagArray = req.params.tags.split(",");
  Content.find({'type': req.params.type, 'tags': { $all: tagArray }}, function(err, content){

    if(err) {
      return res.send(err);
    }
      var numElements = content.length;
      matchArray = [];
      matchArray.push(content[getRandom(numElements)]);
      matchArray.push(content[getRandom(numElements)]);
      res.json(matchArray);
  })
})



module.exports = router;

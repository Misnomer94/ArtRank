var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Content = require('../models/content');



function getRandom(upperBound){
  if(upperBound === 1)
    return [1,1];
  var generate = Math.floor(Math.random() * (upperBound))
  var randoms = [generate ,generate];
  do {
      randoms[1] = Math.floor(Math.random() * (upperBound));
    } while(randoms[0] === randoms[1]);
    return randoms;
}

/*Route to query a matchup by type of media and tags*/
router.get('/matchup/:type/:tags', function(req, res, next){
  tagArray = req.params.tags.split(",");
  Content.find({'type': req.params.type, 'tags': { $all: tagArray }}, function(err, content){

    if(err) {
      return res.send(err);
    }
      var numElements = content.length;
      random = getRandom(numElements);
      matchArray = [];
      matchArray.push(content[random[0]]);
      matchArray.push(content[random[1]]);
      res.json(matchArray);
  })
})



module.exports = router;

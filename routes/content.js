var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Content = require('../models/content');

router.get('/', function(req, res, next) {
  Content.findOne({}, function(err, content){
    if (err) {
      return res.send(err);
    }

    res.json(content);
  });
});

module.exports = router;

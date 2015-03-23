var Content = require('../models/content');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  Content.findOne({}, function(err, content) {
    if (err) {
      return res.send(err);
    }
    res.json(content);
  });
});

module.exports = router;

var Content = require('../models/content');
var express = require('express');
var router = express.Router();


router.route('/content').get(function(req, res) {
  Movie.find(function(err, content) {
    if (err) {
      return res.send(err);
    }
    res.json(content);
  });
});

module.exports = router;

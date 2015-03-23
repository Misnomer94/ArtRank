var mongoose = require('mongoose');

var contentSchema = mongoose.Schema({
  rank: Number,
  type: String,
  tags: [String],
  artist: String,
  flags: [String],
  location: String
});

module.exports = mongoose.model('content', contentSchema);

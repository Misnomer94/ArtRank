var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
  rank: Number,
  type: String,
  tags: String,
  artist: String,
  flags: String,
  location: String
});

mongoose.model('content', contentSchema);

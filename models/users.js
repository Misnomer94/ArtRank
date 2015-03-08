var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  username: String,
  password: String,
  email: String,
});

mongoose.model('users', usersSchema);

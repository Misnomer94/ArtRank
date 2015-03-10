var assert = require('assert');
var should = require('should');
var expect = require('expect');

describe('input', function() {
	before(function() {
		console.log("input should be adb")
	});
	it('input should be read correctly', function(done) {
		var input = getInput();
		assert.equal('abc', getInput());
	});
});

describe('head to head algorithm', function() {
	it('winning piece should gain elo', function(done) {
		var pieceOneElo
	});
	it('losing piece should lose', function(done) {

	});
});

describe('links', function() {
	it('links should be working properly', function(done) {
		var link = getLink();
		link.goTo(function(err) {
			if (err) throw err;
			done();
		});
	});
});

describe('file upload', function() {
	it('files should be uploaded correctly', function(done) {

	});
});

describe('favorite button', function() {
	it('favorite button should add artist to user\'s favorite artits', function(done) {

	});
});

describe('ladder', function() {
	it('ladder should display pieces of art in correct order', function(done) {

	});
});

describe('flags', function() {
	it('server should receive flags that users send', function(done) {

	});
});

describe('connection lost', function() {
	it('should log user out if she has been disconnected for more than one minute', function(done) {

	});
});

describe('user log in', function() {
	it('should log user in if he enters his id and password correctly', function(done) {

	});
});

describe('User', function(){ //taken off stackoverflow, need to revise 
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})


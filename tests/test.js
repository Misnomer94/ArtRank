describe('User', function(){
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

describe('input', function() {
	it('should be adc', function(done) {
		var input = getInput();
		assert.equal('abc', getInput());
	});
});
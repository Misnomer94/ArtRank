'use strict';

describe('Art', function() {

	beforeEach(module('artBoard'));
	describe('art.js tests', function(){
		
		it('should return correct length of imgArt and txtArt', inject(function($controller) {
			var ctrl = $controller('artCtrl', ['Art', function(Art){
				this.imgArt = getImgArt();
				this.txtArt = getTxtArt();
			}]);

			expect(ctrl.imgArt.length).to.equal(3);
			expect(ctrl.txtArt.length).to.equal(3);
		}));

		it('should return the correct fields of imgArt and txtArt', inject(function($controller) {
			var ctrl = $controller('artCtrl', ['Art', function(Art){
				this.imgArt = getImgArt();
				this.txtArt = getTxtArt();
			}]);

			var img = [
			{artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
			{artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
			{artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'}];

			var txt = [
			{artist: 'Place Holdeer', title: 'Abstract Art', txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
			{artist: 'Place Holdeer', title: 'Art of a different sort', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
			{artist: 'Place Holdeer', title: 'Wahingtof', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'}];

			for(var i = 0; i < ctrl.imgArt.length; i++){ 
				expect(ctrl.imgArt[i].artist).to.equal(img[i].artist);
				expect(ctrl.imgArt[i].title).to.equal(img[i].title);
				expect(ctrl.imgArt[i].img).to.equal(img[i].img);

				expect(ctrl.txtArt[i].artist).to.equal(txt[i].artist);
				expect(ctrl.txtArt[i].title).to.equal(txt[i].title);
				expect(ctrl.txtArt[i].txt).to.equal(txt[i].txt);
			}
		}));
});
});

/*describe('input', function() {
	before(function() {
		console.log("input should be abc")
	});
	it('input should be read correctly', function(done) {
		var input = getInput();
		assert.equal('abc', getInput());
	});
});

describe('head to head algorithm', function() {
			var pieceOne = getPieceOne();
			var pieceTwo = getPieceTwo();
			var pieceOneElo = pieceOne.getElo();
			var pieceTwoElo = pieceTwo.getElo();
	it('winning piece should gain elo', function(done) {
			battle(pieceOne, pieceTwo);
			var pieceOneEloAfter = pieceOne.getElo();
			var pieceOneEloAfter = pieceOne.getElo();

	});
	it('losing piece should lose', function(done) {
			battle(pieceOne, pieceTwo);
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
*/
'use strict';

describe('Art', function() {

	beforeEach(module('artBoard'));
	describe('art.js tests', function(){
		
		it('should return correct length of imgArt, txtArt, and audioArt', inject(function($controller) {
			var ctrl = $controller('artCtrl', ['Art', function(Art){
				this.imgArt = getImgArt();
				this.txtArt = getTxtArt();
				this.audioArt = getAudioArt();
			}]);

			expect(ctrl.imgArt.length).to.equal(11);
			expect(ctrl.txtArt.length).to.equal(3);
			expect(ctrl.audioArt.length).to.equal(3);
		}));

		it('should return the correct fields of imgArt, txtArt, and audioArt', inject(function($controller) {
			var ctrl = $controller('artCtrl', ['Art', function(Art){
				this.imgArt = getImgArt();
				this.txtArt = getTxtArt();
				this.audioArt = getAudioArt();
			}]);

			var img = [
			{artist: 'Place Holder', title: 'Washington', img: '../media/600x600.gif'},
			{artist: 'Place Holder', title: 'Washi', img: '../media/300.gif'},
			{artist: 'Place Holder', title: 'Wngton', img: '../media/1000x500.gif'},
			{artist: 'Place Holder', title: 'Music', img: '../media/music.jpg'},
			{artist: 'Place Holder', title: 'Tree', img: '../media/tree.jpg'},
			{artist: 'Place Holder', title: 'Animals', img: '../media/animals.jpg'},
			{artist: 'Place Holder', title: 'Up There', img: '../media/way-up-there.jpg'},
			{artist: 'Place Holder', title: 'Bricks', img: '../media/brick-wallpaper.jpg'},
			{artist: 'Place Holder', title: 'Bricks', img: '../media/yosemite-stream.jpg'},
			{artist: 'Place Holder', title: 'Bricks', img: '../media/horse.jpg'},	
			{artist: 'Place Holder', title: 'Bricks', img: '../media/bonsai.jpg'}];

			var txt = [
			{artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/O captain.txt'},
    		{artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/odetoanightengale.txt'},
    		{artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/ch1ofbravenewworld.txt'}];
            
			var audio = [
			{artist: 'Place Holder', title: 'Washington', audio: '../media/preview.mp3'},
			{artist: 'Place Holder', title: 'Washi', audio: '../media/preview (1).mp3'},
			{artist: 'Place Holder', title: 'Wngton', audio: '../media/preview (2).mp3'}];

			for(var i = 0; i < ctrl.imgArt.length; i++){ 
				expect(ctrl.imgArt[i].artist).to.equal(img[i].artist);
				expect(ctrl.imgArt[i].title).to.equal(img[i].title);
				expect(ctrl.imgArt[i].img).to.equal(img[i].img);
			}
			for(var i = 0; i < ctrl.txtArt.length; i++){
				expect(ctrl.txtArt[i].artist).to.equal(txt[i].artist);
				expect(ctrl.txtArt[i].title).to.equal(txt[i].title);
				expect(ctrl.txtArt[i].txt).to.equal(txt[i].txt);
                }
            for(var i =0; i < ctrl.audioArt.length; i++){
				expect(ctrl.audioArt[i].artist).to.equal(audio[i].artist);
				expect(ctrl.audioArt[i].title).to.equal(audio[i].title);
				expect(ctrl.audioArt[i].audio).to.equal(audio[i].audio);
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

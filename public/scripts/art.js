var app = angular.module('artBoard', []);


app.service('Art', function() {
  var imgArt = [
    	{artist: 'Place Holder', title: 'Washington', img: '../media/600x600.gif'},
    	{artist: 'Place Holder', title: 'Washi', img: '../media/300.gif'},
    	{artist: 'Place Holder', title: 'Wngton', img: '../media/1000x500.gif'},
	{artist: 'Place Holder', title: 'Music', img: '../media/music.jpg'},
	{artist: 'Place Holder', title: 'Tree', img: '../media/tree.jpg'},
	{artist: 'Place Holder', title: 'Animals', img: '../media/animals.jpg'},
	{artist: 'Place Holder', title: 'Up There', img: '../media/way-up-there.jpg'},
	{artist: 'Place Holder', title: 'Bricks', img: '../media/brick-wallpaper.jpg'},
	{artist: 'Place Holder', title: 'Bricks', img: '../media/yosemite-stream.jpg'},
  ];

  var audioArt = [
    	{artist: 'Place Holder', title: 'Washington', audio: '../media/preview.mp3'},
    	{artist: 'Place Holder', title: 'Washi', audio: '../media/preview (1).mp3'},
    	{artist: 'Place Holder', title: 'Wngton', audio: '../media/preview (2).mp3'},
  ];

  var txtArt = [
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/O captain.txt'},
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/odetoanightengale.txt'},
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: '../media/ch1ofbravenewworld.txt'},
  ];

  return {
    getImgArt: function(){
      return imgArt;
    },

    getTxtArt: function(){
      return txtArt;
    },

    getAudioArt: function(){
      return audioArt;
    },
  }

});

app.controller('artCtrl', ['Art', function(Art) {
  this.imgArt = Art.getImgArt();
  this.txtArt = Art.getTxtArt();
  this.audioArt = Art.getAudioArt();
}]);



app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

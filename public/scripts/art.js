var app = angular.module('artBoard', []);


app.service('Art', function() {
  var imgArt = [
    	{artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
    	{artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
    	{artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'},
	{artist: 'Place Holder', title: 'Music', img: '../images/music.jpg'},
	{artist: 'Place Holder', title: 'Tree', img: '../images/tree.jpg'},
	{artist: 'Place Holder', title: 'Animals', img: '../images/animals.jpg'},
	{artist: 'Place Holder', title: 'Up There', img: '../images/way-up-there.jpg'},
	{artist: 'Place Holder', title: 'Bricks', img: '../images/brick-wallpaper.jpg'},
  ];

  var audioArt = [
    	{artist: 'Place Holder', title: 'Washington', audio: '../images/preview.mp3'},
    	{artist: 'Place Holder', title: 'Washi', audio: '../images/preview (1).mp3'},
    	{artist: 'Place Holder', title: 'Wngton', audio: '../images/preview (2).mp3'},
  ];

  var txtArt = [
    {artist: 'Place Holdeer', title: 'Abstract Art', 
txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Art of a different sort', 
txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Wahingtof', 
txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},


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

var app = angular.module('artBoard', []);


app.service('Art', function() {
  var imgArt = [
    {artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
    {artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
    {artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'},
  ];

  var txtArt = [
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Art of a different sort', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Wahingtof', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},


  ];

  return {
    getImgArt: function(){
      return imgArt;
    },

    getTxtArt: function(){
      return txtArt;
    },

  }

});

app.controller('artCtrl', ['Art', function(Art) {
  this.imgArt = Art.getImgArt();

  this.txtArt = Art.getTxtArt();
}]);



app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

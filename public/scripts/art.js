var app = angular.module('artBoard', []);


app.controller('artCtrl', function() {
  this.imgArt = [
    {artist: 'Place Holder', title: 'Washington', img: '../images/600x600.gif'},
    {artist: 'Place Holder', title: 'Washi', img: '../images/300.gif'},
    {artist: 'Place Holder', title: 'Wngton', img: '../images/1000x500.gif'},
  ]

  this.txtArt = [
    {artist: 'Place Holdeer', title: 'Abstract Art', txt: 'Placeholder texweofoiebgoegril erough oewri oergh woeirgj ekgbe riv eirg erugh ernek rioeru ier t Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Art of a different sort', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder  regioher wiguh  eriogh eiuotext Placeholder text Placeholder text Placeholder text'},
    {artist: 'Place Holdeer', title: 'Wahingtof', txt: 'Placeholder text Placeholder text Placeholder text Placeholder text Placeholder textPlaceholder text Placeholder text Placeholder text Placeholder text'},


  ]
});

app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});


app.directive("siteHead", function () {
    return {
        restrict: 'E',
        templateUrl: "/views/site-head.html"
    };
});

app.directive("imgPanel", function () {
    return {
        restrict: 'E',
        templateUrl: "/views/img-panel.html"
    };
});

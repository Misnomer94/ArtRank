var app = angular.module('artBoard', []);


app.service('Art', function($http) {

  var imgArt;

  var audioArt;

  var txtArt;

  return {
    getImgArt: function(cb){


     $http.get('/content/image').success(function(data){

        var formattedData = JSON.stringify(data);
        cb(this.imgArt, formattedData);

     });

    },

    getTxtArt: function(){
      $http.get('/content/text').success(function(data){

        var formattedData = JSON.stringify(data);
        cb(this.txtArt, formattedData);

      });
    },

    getAudioArt: function(){
      $http.get('/content/audio').success(function(data){

        var formattedData = JSON.stringify(data);
        cb(this.audioArt, formattedData);

      });
    },
  }

});

function setData(type, data){

  type = data;
  console.log("Data: " + data);

}



app.controller('artCtrl', ['Art', function(Art) {


  Art.getImgArt(setData);



}]);



app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

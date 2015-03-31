var app = angular.module('artBoard', []);


app.service('Art', function($http) {

  var imgArt;

  var audioArt;

  var txtArt;

  return {
    getImgArt: function(cb){


     $http.get('/content/image').success(function(data){

        var formattedData = JSON.stringify(data);
        cb(data);
        //console.log(data);
        //console.log(data.data);
        }).error(function(data) {
            console.log('Getting Images Failed');
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



app.controller('artCtrl', ['$scope', 'Art', function($scope, Art) {

  Art.getImgArt(function(data){
    console.log("IM HERE");
    console.log(data);
    $scope.imageArt = data;
    console.log($scope.imageArt);
  });
  console.log($scope.imageArt);



}]);



app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

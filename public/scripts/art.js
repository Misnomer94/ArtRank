var app = angular.module('artBoard', []);

app.service('Art', function($http) {

  var imgArt;
  var audioArt;
  var txtArt;

  return {

    //Request JSON data from Image API
    getImgArt: function(callback){

      $http.get('/content/image').success(function(data){

        callback(data);

        }).error(function(data) {

        console.log("Failed GET request to /content/image");

        });

    },

    //Request JSON data from Text API
    getTxtArt: function(callback){

      $http.get('/content/text').success(function(data){

        callback(data);

      }).error(function(data){

        console.log("Failed GET request to /content/text")

      });
    },

    //Request JSON data from Audio API
    getAudioArt: function(callback){

      $http.get('/content/audio').success(function(data){

        callback(data);

      }).error(function(data){

        console.log("Failed GET request to /content/audio");

      });
    }


  }

});


app.controller('artCtrl', ['$scope', 'Art', function($scope, Art) {

  $scope.orderProp = 'rank';
  $scope.quantity = 4;

  Art.getImgArt(function(data){

    $scope.imageArt = data;

  });

}]);


app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

var app = angular.module('artBoard', []);

app.service('Art', function($http) {

  return {

    //Request JSON data from Image API
    getImgArt: function(callback){

      $http.get('/content/image').success(function(data){

        callback(data);

        }).error(function(data) {

        console.log("Error on GET request to /content/image");

        });

    },

    //Request JSON data from Text API
    getTxtArt: function(callback){

      $http.get('/content/text').success(function(data){

        callback(data);

      }).error(function(data){

        console.log("Error on GET request to /content/text")

      });
    },

    //Request JSON data from Audio API
    getAudioArt: function(callback){

      $http.get('/content/audio').success(function(data){

        callback(data);

      }).error(function(data){

        console.log("Error on GET request to /content/audio");

      });
    }


  }

});


app.controller('artCtrl', ['$scope', 'Art', function($scope, Art) {

  $scope.orderProp = 'rank';
  $scope.iQuantity = 4;
  $scope.tQuantity = 4;
  $scope.aQuantity = 3;


  Art.getImgArt(function(data){

    $scope.imageArt = data;

  });

  Art.getTxtArt(function(data){

    $scope.txtArt = data;

  });

  Art.getAudioArt(function(data){

    $scope.audioArt = data;

  });

  $scope.loadTxt =  	function (ele, url){
  		console.log("HERE");
  		console.log(ele);
  		console.log(url);
  		document.getElementById(ele).value = url;
  	}

}]);


app.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

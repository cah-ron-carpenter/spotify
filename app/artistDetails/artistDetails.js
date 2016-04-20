'use strict';

angular.module('myApp.artistDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artistDetails/:artistId', {
    templateUrl: 'artistDetails/artistDetails.html',
    controller: 'ArtistDetailsCtrl'
  });
}])

.controller('ArtistDetailsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var getArtistURL = 'https://api.spotify.com/v1/artists/' + $routeParams.artistId;
    var setResponseToModel = function(response) {
            $scope.artist = response.data;
            $scope.name = $routeParams.artistName;
        }
    $scope.millisToMinutesAndSeconds = function millisToMinutesAndSeconds(millis) {
          var minutes = Math.floor(millis / 60000);
          var seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
    $http.get(getArtistURL).then(setResponseToModel);
}]);
'use strict';

angular.module('myApp.artistDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artistDetails/:artistId', {
    templateUrl: 'artistDetails/artistDetails.html',
    controller: 'ArtistDetailsCtrl',
    css: 'artistDetails/artistDetails.css'
  });
}])

.controller('ArtistDetailsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var getArtistURL = 'https://api.spotify.com/v1/artists/' + $routeParams.artistId;
    var setArtistResponseToModel = function(response) {
            $scope.artist = response.data;
            $scope.name = $routeParams.artistName;
        }
    var setAlbumResponseToModel = function(response) {
        $scope.albums = response.data.items;
    }
    $scope.millisToMinutesAndSeconds = function millisToMinutesAndSeconds(millis) {
          var minutes = Math.floor(millis / 60000);
          var seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
    $http.get(getArtistURL).then(setArtistResponseToModel);
    $http.get(getArtistURL + '/albums').then(setAlbumResponseToModel);
}]);
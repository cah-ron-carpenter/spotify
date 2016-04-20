'use strict';

angular.module('myApp.albumDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/albumDetails/:albumId', {
    templateUrl: 'albumDetails/albumDetails.html',
    controller: 'AlbumDetailsCtrl'
  });
}])

.controller('AlbumDetailsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var getAlbumURL = 'https://api.spotify.com/v1/albums/' + $routeParams.albumId;
    var setResponseToModel = function(response) {
            $scope.album = response.data;
            $scope.tracks = response.data.tracks.items;
            $scope.name = $routeParams.artistName;
        }
    $scope.millisToMinutesAndSeconds = function millisToMinutesAndSeconds(millis) {
          var minutes = Math.floor(millis / 60000);
          var seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }
    $http.get(getAlbumURL).then(setResponseToModel);
}]);
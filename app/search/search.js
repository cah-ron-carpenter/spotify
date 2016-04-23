'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl',
    css: 'search/search.css'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.search = function () {
        $http.get('https://api.spotify.com/v1/search?q=' + $scope.searchValue + '&type=' + $scope.searchType).then(processResponse);
    }
    
    var processResponse = function(response) {
        $scope.searchResults = response.data[$scope.searchType + 's'].items;
    }

    $scope.searchType = 'artist';
}]);
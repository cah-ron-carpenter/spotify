'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.search',
  'myApp.view2',
  'myApp.albumDetails',
  'myApp.artistDetails',
  'myApp.playlistDetails',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/search'});
}]);

var app = angular.module("crudApp", ['ngRoute','ngResource', 'gm']);

app.config(($routeProvider, $locationProvider) => {
	$routeProvider
		.when('/', {
			templateUrl: '/index.html'
		})
		.when('/addShop', {
			templateUrl: '/addShop.html'
		})
		.when('/search', {
			templateUrl: '/search.html'
		})
		.otherwise({
			templateUrl: '/index.html'
		});
});

app.controller('MainCtrl', ($scope) =>{
	  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
	      var location = $scope.employee.address.getPlace().geometry.location;
	      $scope.$apply();
	  });
});
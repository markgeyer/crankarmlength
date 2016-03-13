angular.module('app', ['ngRoute', 'ngAnimate'])

// Router
.config(function ($routeProvider) {
	$routeProvider

		// Index
		.when('/', {
			templateUrl: 'calculator.html',
			controller: 'calculatorController'
		})

		// 404
		.when('/404', {
			templateUrl: '404.html'
		})

		.otherwise({ redirectTo: '/404' });
})

// Controller
.controller('calculatorController', function($scope) {

	console.log('calculator Controller');
	$scope.yay = "calculator";

});
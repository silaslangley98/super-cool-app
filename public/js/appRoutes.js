(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				controller: "HomeController",
				templateUrl: "views/home.html"
			})
			.state('facebook', {
				url: '/facebook',
				controller: "FacebookController",
				templateUrl: "views/facebook.html"
			})
			.state('twitter', {
				url: '/twitter',
				controller: 'TwitterController',
				templateUrl: 'views/twitter.html'
			})
			.state('comments', {
				url: '/comments',
				controller: 'CommentsController',
				templateUrl: 'views/comments.html'
			})
			.state('Weather', {
				url: '/weather',
				controller: 'WeatherController',
				templateUrl: 'views/weather.html'
			})
			.state('Profile', {
				url: '/profile',
				controller: 'ProfileController',
				templateUrl: 'views/profile.html'	
			})
			.state('Login', {
				url: '/login',
				controller: 'LoginController',
				templateUrl: 'views/login.html'
			})
			.state('editusers', {
                url: '/users/:id',
                controller: 'UserFormController',
                templateUrl: 'views/admin/userForm.html'
            })
			
	});
	
})(window.angular);
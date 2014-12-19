(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('WeatherController', function($scope, CommentsService) {

		$scope.comments = CommentsService.query({feature: "weather"});

		$scope.save = function() {
	            
			var submitter = $scope.currentUser.firstName + " " + $scope.currentUser.lastName;
 	            
			$scope.comment.$save({
	                feature: "weather",
	                submitter: submitter,
	                comment: $scope.textareaComment
	        });
		};

	});

})(window.angular);
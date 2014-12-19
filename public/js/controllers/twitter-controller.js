(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('TwitterController', function($scope, CommentsService) {

		$scope.comments = CommentsService.query({feature: "twitter"});

		$scope.save = function() {
	            
	        var submitter = $scope.currentUser.firstName + " " + $scope.currentUser.lastName;
 	            
			$scope.comment.$save({
	                feature: "twitter",
	                submitter: submitter,
	                comment: $scope.textareaComment
	        });
		};

	});

})(window.angular);
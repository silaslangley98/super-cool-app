(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('CommentsController', function($scope, CommentsService) {

		$scope.comments = CommentsService.query({feature: "comments"});

		$scope.save = function() {

			var submitter = $scope.currentUser.firstName + " " + $scope.currentUser.lastName;
 	            
			$scope.comment.$save({
	                feature: "comments",
	                submitter: submitter,
	                comment: $scope.textareaComment
	        });

		};



	});

})(window.angular);
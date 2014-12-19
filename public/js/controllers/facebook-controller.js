(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('FacebookController', function($scope, CommentsService) {

		$scope.comments = CommentsService.query({feature: "facebook"});

		$scope.save = function() {
	            
			var submitter = $scope.currentUser.firstName + " " + $scope.currentUser.lastName;
 	            
			$scope.comment.$save({
	                feature: "facebook",
	                submitter: submitter,
	                comment: $scope.textareaComment
	        });
		
		};
	});

})(window.angular);
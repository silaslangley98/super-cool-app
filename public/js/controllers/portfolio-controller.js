(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('PortfolioController', function($scope, CommentsService) {

		$scope.comments = CommentsService.query({feature: "portfolio"});

		$scope.save = function() {

			var submitter = $scope.currentUser.firstName + " " + $scope.currentUser.lastName;
 	            
			$scope.comment.$save({
	                feature: "portfolio",
	                submitter: submitter,
	                comment: $scope.textareaComment
	        });
		};
		
	});

})(window.angular);
(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.directive('commentsHere', function(CommentsService)  {

		return {
			scope: {
				comments: "="
			},
			restrict: "E",
			replace: true,
			templateUrl: 'templates/commentForm.html',
			link: function(scope) {

				scope.setComment = function(scope.textareaComment) {
				
	                CommentsService.setComment(scope.textareaComment);
		            
		        }
            }
		}

	});

})(window.angular);
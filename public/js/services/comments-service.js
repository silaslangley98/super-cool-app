(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.factory('CommentsService', function($http, API) {

		return {

			getComments: function() {
				return API.comments;
			}

			
        };
    });

})(window.angular);
(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.factory('FeaturesService', function($http, API) {

		return {

			getFeatures: function() {
				return API.features;
			}

		};

	});

})(window.angular);
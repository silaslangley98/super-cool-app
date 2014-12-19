(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.controller('MainController', function($scope, FeaturesService) {

		FeaturesService.getFeatures().then (
			
			function(response) {
				features = response.data;

				angular.forEach(features, function(feature) {

					if (feature.mostRecentlyVoted === true) {
						var i = features.indexOf(feature);
						var holder = features.splice(i, 1);
						features.unshift(holder);
					}
				});

				$scope.features = features;
								
			},


			function(reason) {
				$scope.errorMessage = reason.statusText;
			}

		);

		setInterval(function(){

			var rand = Math.floor((Math.random() * 5) + 1);
			var upOrDown = Math.floor((Math.random() * 2) + 1);
			if (upOrDown === 1) {
				$scope.features[rand].upVotes += 1;
			} else {
				$scope.features[rand].downVotes -= 1;
			}

			scope.save = function() {
				scope.feature.$save({
	                name: $scope.feature,
	                upVotes: $scope.upVotes,
	                downVotes: $scope.downVotes
        		});
        	};

		}, 10000);

	});

})(window.angular);
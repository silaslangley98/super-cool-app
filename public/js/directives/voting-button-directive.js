(function(angular) {
	"use strict";

	var app = angular.module('superApp');

	app.directive('votingButton', function(FeaturesService)  {

		return {
			scope: {
				feature: "="
			},
			restrict: "E",
			replace: true,
			templateUrl: 'templates/voting.html',
			link: function(scope, element) {

				scope.feature.hasVoted = false;

				if (!scope.feature.hasVoted) {

					scope.voteUp = function(feature) {

						scope.feature.upVotes += 1;
						scope.feature.downVotes +- 1;

					};

					scope.voteDown = function(feature) {
						scope.feature.upVotes -= 1;
						scope.feature.downVotes += 1;
					};

					scope.feature.hasVoted = true;

					scope.save = function() {
		            
						scope.feature.$save({
				                name: $scope.feature,
				                upVotes: $scope.upVotes,
				                downVotes: $scope.downVotes,
				                mostRecentlyVoted: true;
				        });

			            /** $scope.currentUser.$save({
			                id: $scope.currentUser._id,
			                firstName: $scope.currentUser.firstName,
			                lastName: $scope.currentUser.lastName,
			                email: $scope.currentUser.email,
			                hasVoted: true
			            }); **/

					};
				} else {
					alert("You have already voted");
				}

				

			}
		}

	});

})(window.angular);
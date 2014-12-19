(function(angular) {
    "use strict";

    var app = angular.module('superApp');

    app.factory('API', function($resource) {

        return {

            features: $resource('/api/features'),

            feature: $resource('/api/features/:id'),

            user: $resource('/api/users/:id'),

            users: $resource('/api/users'),

            comment: $resource('/api/comments/:id'),

            comments: $resource('/api/comments'),

            login: $resource('/api/login'),

            logout: $resource('/api/logout')

        };

    });

    app.factory('Auth', function(API, $rootScope, $cookieStore) {

        $rootScope.currentUser = $cookieStore.get('user');

        return {

            login: function(user, success, error) {
                return API.login.save(user)
                    .$promise
                    .then(
                        function(data) {
                            $rootScope.currentUser = data;

                            success();
                        },
                        error
                    );
            },

            logout: function(success) {
                return API.logout.get() {
                    .$promise
                    .then(function() {

                        $rootScope.currentUser = null;
                        $cookieStore.remove('user');

                        success();
                    });
                }
            }
        };

    });

})(window.angular);
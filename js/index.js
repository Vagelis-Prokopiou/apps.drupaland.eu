angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/serviceapp");
        //
        // Now set up the states
        $stateProvider
            .state('serviceapp', {
                url: "/serviceapp",
                templateUrl: "partials/serviceapp.html"
            })
            .state('peribiblicumapp', {
                url: "/peribiblicumapp",
                templateUrl: "partials/peribiblicumapp.html"
            })
    })
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: "GET",
            url: "http://www.drupaland.eu/rest/projects"
        }).then(function returnSuccess(response) {
            $scope.projects = response.data;
        }, function returnError(response) {
            $scope.data = response.statusText;
        });
    }]);

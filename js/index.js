angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // $urlRouterProvider.caseInsensitive(true);

        // Now set up the states
        $stateProvider
            .state('serviceapp', {
                url: "/serviceapp",
                templateUrl: "partials/serviceapp.html"
            })
            .state('peribiblicumapp', {
                url: "/peribiblicumapp",
                templateUrl: "partials/peribiblicumapp.html"
            });



        // For any unmatched url, redirect to /serviceapp
        $urlRouterProvider.otherwise('/serviceapp');

        // Enable html5mode (I dont't implement it because the .otherwise method breaks).
        // $locationProvider.html5Mode(true);
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

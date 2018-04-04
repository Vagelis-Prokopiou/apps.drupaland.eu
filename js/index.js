angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

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
    })
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: "GET",
            url: "http://www.drupaland.eu/rest/projects?_format=json"
        }).then(function returnSuccess(response) {
            $scope.projects = response.data;
        }, function returnError(response) {
            $scope.data = response.statusText;
        });
    }]);

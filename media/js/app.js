angular.module('brainTrainProjects', [
    'brainTrainProjects.controllers',
    //'brainTrainProjects.services',
    'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html', 
            controller: 'projectController'
        })
        .when('/project/:id', {
            templateUrl: 'partials/project.html', 
            controller: 'projectController'
        })
        .when('/project/:name', {
            templateUrl: 'partials/project.html', 
            controller: 'projectController'
        })
        .otherwise({redirectTo: '/'});
}]);

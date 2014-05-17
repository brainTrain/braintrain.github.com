angular.module('brainTrainProjects', [
    'brainTrainProjects.controllers',
    'brainTrainProjects.services',
    'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html', 
            controller: 'projectsController'
        })
        .when('/:name', {
            templateUrl: 'partials/project.html', 
            controller: 'projectController'
        })
        .otherwise({redirectTo: '/'});
}]);

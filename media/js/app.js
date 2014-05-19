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
}])
/*
    .run() and .factory() functions run on each route load
    using them to init loggly tracker and load locaiton info
*/
.run(function($rootScope, initLogglyLogger) {
    $rootScope.$on('$routeChangeSuccess', function() {
        initLogglyLogger($rootScope);
    });
})
.factory('initLogglyLogger', function() {
    return function(scope) {
        var logglyTracker = new LogglyTracker(),
            locationObj = {
                'tag': 'portfolio',
                'location': window.location
            };

        logglyTracker.push({
            'logglyKey': '15f0ab93-d352-4dc0-ba7a-5c78741990ed'
        });
        logglyTracker.push(locationObj);
    }
});

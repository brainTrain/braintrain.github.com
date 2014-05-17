angular.module('brainTrainProjects.controllers', [])
.controller('projectsController', function($scope, projectsAPIservice) {
    $scope.projectList = projectsAPIservice.getProjects();
})
.controller('projectController', function($scope, $routeParams, $filter, projectsAPIservice) {
    var project = $filter('filter')(
        projectsAPIservice.getProjects(), 
        {'name': $routeParams.name}, 
        true
    );
    $scope.project = project[0];
});

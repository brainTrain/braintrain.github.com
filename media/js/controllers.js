angular.module('brainTrainProjects.controllers', [])
.controller('projectsController', function($scope, projectsAPIservice) {
    $scope.projectList = projectsAPIservice.getProjects();
})
.controller('projectController', function($scope, $routeParams, projectsAPIservice) {
    $scope.project = projectsAPIservice.getProjects($routeParams.name)[0];
});

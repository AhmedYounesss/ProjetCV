

var app = angular.module('cvApp', []);
app.controller('myCVCtrl', function($scope) {
    $scope.for="Formations professionnelles";
    $scope.exp="Experience";
    $scope.name= "Ahmed Younes";
    $scope.titre= "Développeur Ful Stack";
    $scope.jobTitle="Développeur Angularjs, Nodejs,Odoo";
    $scope.proj="Projets";
    $scope.titre2="Développeur Odoo";
    $scope.comp="Compétences";
});
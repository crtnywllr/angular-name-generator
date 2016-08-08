angular.module('myApp', ['ngMessages', 'ngAnimate'])
    .controller("myCtrl", function ($scope) {
        $scope.data = {};

        $scope.gender = {};

        $scope.inputHide = false;

        $scope.submit = function () {
            $scope.inputHide = true;
        }
        $scope.reset = function () {
            $scope.inputHide = false;
            $scope.data = {};
        }
    });

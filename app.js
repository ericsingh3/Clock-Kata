/**
 * Created by esingh on 5/21/2015.
 */
var clockKata = angular.module('clockKata', []);

clockKata.controller('ClockController', function($scope, $timeout,$filter) {
    $scope.time = new Date();
    var update= function () {
        $scope.time = Date.now();
        $timeout(update,1000);
    }
    update();
});
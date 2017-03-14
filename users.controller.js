angular.module('app').controller('UsersCtrl', function ($scope,$interval) {

    $scope.titolo = "lista utenti";

    $interval(function(){
        $scope.data = new Date();
    }, 1000);


});
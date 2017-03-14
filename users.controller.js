angular.module('app').controller('UsersCtrl', function ($scope, $interval, utentiService){

    $scope.titolo = "lista utenti";

    $interval(function(){
        $scope.data = new Date();
    }, 1000);

    $scope.utenti = utentiService.getUtenti();
    $scope.lingua = "tutte";

});
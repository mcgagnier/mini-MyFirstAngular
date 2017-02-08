angular.module('friendsList', [])
    .controller('mainCtrl', function($scope){
        $scope.message = "hola friends";
        $scope.friends = ["Brandon", "Dyllon", "Tyler"];

        $scope.addFriend = function(name) {
            $scope.friends.push(name);
        }
    })

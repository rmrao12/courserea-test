 var app=angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.name= "bla bla";
  $scope.sayhello= function(){
    return "hello world";
  };
});

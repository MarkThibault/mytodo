'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:TutorialsCtrl
 * @description
 * # TutorialsCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('TutorialsCtrl', function ($scope, $http) {

// Example 1
    $scope.firstName = 'John';
    $scope.$watch('lastName', function(newValue, oldValue){
      console.log('new value is ' + newValue);
    });

    setTimeout(function(){
      $scope.lastName = 'Smith';
      $scope.$apply();
    }, 1000);

// Example 2
    $scope.names = ['John', 'Joe', 'Jim', 'Jack'];

    $scope.addName = function(){
      $scope.names.push($scope.enteredName);
      $scope.enteredName = '';
    };

    $scope.removeName = function(index){
      $scope.names.splice(index, 1);
    };

// Example 3
    $http.get('/db/countries.json').success(function(data){
      $scope.countries = data
    });
  });

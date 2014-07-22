'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.todos = ['Item1', 'Item2', 'Item3'];
    $scope.newTodo = '';

    $scope.addTodo = function(){
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }

  });

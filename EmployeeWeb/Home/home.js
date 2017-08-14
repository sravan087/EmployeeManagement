


angular.module('employee.home', [])
                 .controller('HomeCtrl', function ($scope, $http) {
                     $scope.Employees = [];

                     function ViewEmployees()
                     {
                         $http({
                             url: SERVICE_BASE +  '/api/employee',
                             method : 'GET'
                         }).then(function (response) {
                             $scope.Employees = response.data
                         })
                     }

                     $scope.Employees = ViewEmployees;

                     ViewEmployees();
                 });
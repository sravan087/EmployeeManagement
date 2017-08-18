


angular.module('employee.home', [])
                 .controller('HomeController', function ($scope, homeService) {
                     $scope.Employees = [];

                     function ViewEmployees()
                     {
                         return homeService.Employees().then(function (response) {
                             $scope.Employees = response.data
                         }, function (error) {
                             console.log(error);
                         });
                     }

                     $scope.Employees = ViewEmployees;

                     ViewEmployees();
                 })
                 .service('homeService', function ($http, store) {
                     this.Employees = function () {
                         console.log(store.get('accessToken'));
                         return $http({
                             url: SERVICE_BASE + '/api/employee', method: 'GET',
                             headers: { 'Authorization': 'bearer ' + store.get('accessToken') }
                         });
                     }
                 });
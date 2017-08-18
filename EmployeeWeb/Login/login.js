


angular.module('employee.login', [])
                 .controller('loginController', function ($scope, $http, $q, store, $location, loginService) {
                  
                     $scope.singIn = function () {
                         var obj = { 'username': $scope.userEmail, 'password': $scope.userPassword, 'grant_type': 'password' };
                         Object.toparams = function ObjectsToParams(obj) {
                             var p = [];
                             for (var key in obj) {
                                 p.push(key + '=' + encodeURIComponent(obj[key]));
                             }
                             return p.join('&');
                         }
                         loginService.accessToken(Object.toparams(obj)).then(function (response) {
                             console.log(response.data);
                             store.set('accessToken', response.data.access_token)
                             $location.path('/Home');
                         }, function (error) {
                             console.log(error);
                         });};
                     $scope.logout = function () {
                         userService.CurrentUser = null;
                         userService.SetCurrentUser(userService.CurrentUser);
                     }

                 })
                 .service('loginService', function ($http) {

                     this.accessToken = function (userAccount) {
                         return $http({
                             method: 'post',
                             url: AUTH_SERVICE_BASE + "/oauth/token",
                             data: userAccount,
                             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                         })
                     };

                 });
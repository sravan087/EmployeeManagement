/// <reference path="C:\Users\sravan\Documents\Visual Studio 2015\Projects\EmployeeManagement\EmployeeWeb\scripts/angular.min.js" />


angular.module('employee', ['ngRoute', 'angular-storage', 'employee.home', 'employee.login'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

       $locationProvider.html5Mode(true);

       $routeProvider
       .when('/Home', { controller: 'HomeController', templateUrl: 'Home/home.html', requiresLogin: true })
       .when('/Login', { controller: 'loginController', templateUrl: 'Login/login.html' })
       .when('/', { redirectTo: '/Login' });


     
      })
     //  .config(['$httpProvider', function ($httpProvider, store) {
    //    var interceptor = function ($location, store) {
    //        return {
    //            request: function (config) {
    //                var accesstoken = store.get('accesstoken');
    //                if (accesstoken != null) {
    //                    config.headers['authorization'] = 'bearer ' + accesstoken;
    //                }
    //                return config;
    //            },
    //            responseerror: function (rejection) {
    //                if (rejection.status === 401) {
    //                    $location.path('/login');

    //                }
    //                if (rejection.status === 403) {
    //                    //$location.path('/unauthorized');

    //                }

    //            }

    //        }
    //    }
    //    var params = ['$location', store];
    //    interceptor.$inject = params;
    //    $httpProvider.interceptors.push(interceptor);
    //}]);

/// <reference path="C:\Users\sravan\Documents\Visual Studio 2015\Projects\EmployeeManagement\EmployeeWeb\scripts/angular.min.js" />


angular.module('employee', ['ngRoute', 'employee.home'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', { controller: 'HomeCtrl', templateUrl: 'home/home.html' })
    });
                
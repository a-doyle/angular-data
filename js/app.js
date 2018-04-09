var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateURL: 'views/login.html',
            controller: 'RegistrationController'
        }).
        when('/register', {
            templateURL: 'views/register.html',
            controller: 'RegistrationController' 
        }).
        when('/success', {
            templateURL: 'views/success.html',
            controller: 'SuccessController' 
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);
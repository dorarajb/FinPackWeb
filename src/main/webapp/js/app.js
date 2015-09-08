'use strict';

// Declare app level module which depends on filters, and services
angular.module('fpw', ['fpw.services', 'fpw.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/po', {templateUrl: 'templates/po.html', controller: 'POController'});
        $routeProvider.otherwise({redirectTo: '/po'});
    }]);

'use strict';

/* Controllers */


var app = angular.module('fpw.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('POController', ['$scope', 'POFactory', function ($scope, POFactory) {
    POFactory.query({}, function (poFactory) {
    	$scope.poList = poFactory;
    	$scope.poModel = poFactory[0];
    	
    	$scope.displayPO = function(po) {
    		$scope.po = po;    		
    	}
    })
}]);
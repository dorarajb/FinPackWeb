'use strict';

/* Services */

var services = angular.module('fpw.services', ['ngResource']);

services.factory('POFactory', function ($resource) {
    return $resource('/finpackweb/rest/po/:poid', {poid:'@poid'}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        },
        get: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});

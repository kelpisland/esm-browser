(function () {

    'use strict';

    angular.module('app.maps')
        .directive('tmplMap', directiveMap);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Document Upload General
	//
    // -----------------------------------------------------------------------------------
    function directiveMap() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/maps/partials/map-layers.html',
            scope: {
            	layers: '='
            },
            controller: 'controllerMap',
            controllerAs: 'mpl'
        };

        return directive;
    }
 })();

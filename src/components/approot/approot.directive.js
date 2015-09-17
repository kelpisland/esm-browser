(function () {

    'use strict';

    angular.module('app.approot')
        .directive('tmplApproot', directiveFunction)
        .controller('AppController', ControllerFunction);


    // ----- directiveFunction -----
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/approot/approot.html',
            scope: {
            },
            controller: 'AppController',
            controllerAs: 'rt'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = [];

    /* @ngInject */
    function ControllerFunction() {
		var rt = this;
		rt.public = true;
		// set to true to hide the navbar on the public viewer
		// this needs to be overridden by the login.
    }

})();

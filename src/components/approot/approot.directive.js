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
    ControllerFunction.$inject = ['Utils', 'Global'];

    /* @ngInject */
    function ControllerFunction(Utils, Global) {
		var rt = this;
		rt.public = true;
		// set to true to hide the navbar on the public viewer
		// this needs to be overridden by the login.
		
		// this would happen after a login.
		// get current user
		Utils.getCurrentUser().then( function(res) { // This should return the logged in user according to the authenticated profile on the server.
			Global.user = res.data;
		});
		
		// Get Project Stages for use in filter.
		Utils.getProjectStages().then( function(res) {
			Global.projectStages = res.data;
		});	
		
		
    }

})();

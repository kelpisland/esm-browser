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
    ControllerFunction.$inject = ['$scope', 'Utils', 'Global'];

    /* @ngInject */
    function ControllerFunction($scope, Utils, Global) {
		var rt = this;
		rt.public = true;
		// set to true to hide the navbar on the public viewer
		// this needs to be overridden by the login.
		
        $scope.$on('loggedIn', function(res, arg) {
            console.log(res, arg);
            Global.user.name = arg;
            Global.public = arg === 'public';
            Global.user.type = arg;
        });

		// this would happen after a login.
		// get current user
		// Utils.getCurrentUser().then( function(res) { // This should return the logged in user according to the authenticated profile on the server.
		// 	Global.user = res.data;
		// 	rt.public = res.data.public;
		// });
		
		// Get Project Phases for use in filter.
		Utils.getProjectMilestones().then( function(res) {
			Global.projectPhases = res.data;
		});	
		
		
    }

})();

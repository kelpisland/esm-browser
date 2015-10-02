(function () {

    'use strict';

    angular.module('app.projects')
		// Proponents
		.controller('controllerProponentProjects', controllerProponentProjects)

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Proponent Projects Main
	//
    // -----------------------------------------------------------------------------------
    controllerProponentProjects.$inject = ['logger', '$state', 'Projects', 'Global'];
    /* @ngInject */
    function controllerProponentProjects(logger, $state, Projects, Global) {
		var vm = this;

		Projects.getProjects().then( function(res) {
			vm.projects = res.data;
		});

		vm.proponent = Global.user;

		vm.view = 'list';

    }

})();

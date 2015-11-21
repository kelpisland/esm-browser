(function () {

    'use strict';

    angular.module('app.projects')
		// Public
        .controller('controllerPublicProjects', controllerPublicProjects)
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    controllerPublicProjects.$inject = ['logger', '$state', 'Projects'];
    /* @ngInject */
    function controllerPublicProjects(logger, $state, Projects) {
		var vm = this;

		Projects.getProjectTypes().then( function(res) {
			vm.types = res.data;
		});

		Projects.getProjects().then( function(res) {
			vm.projects = res.data;
			// THIS CAN BE REMOVED WHEN LOCAL SERVER IS REMOVED
			Projects.getLocalProjects().then( function(res) {
				vm.projects = vm.projects.concat(res.data);
			});
			//
		});

		//
		vm.goToProject = function(id) {
			$state.go('public.project', {id:id});
		};	
		
		vm.filterKeyword = '';
		vm.filterObject = {};
		vm.view = 'map';
		
    }

})();

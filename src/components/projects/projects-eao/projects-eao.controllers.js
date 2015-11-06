(function () {

    'use strict';

    angular.module('app.projects')
		// EAO
		.controller('controllerEAOProjects', controllerEAOProjects)
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Projects Main
	//
    // -----------------------------------------------------------------------------------
    controllerEAOProjects.$inject = ['$scope', '$state', 'Projects', 'Global'];
    /* @ngInject */
    function controllerEAOProjects($scope, $state, Projects, Global) {
		var vm = this;

		// get projects form the mock server storage
		Projects.getLocalProjects().then( function(res) {
			vm.projects = res.data;
			console.log('projects', vm.projects);
		});

		// get projects
		Projects.getProjects().then( function(res) {
			_.each( res.data, function( project, idx ) {
				vm.projects.push(project);
			});
		});

		vm.proponent = Global.user;

		vm.panelSort = [
			{'field': 'name', 'name':'Title'},
			{'field': 'region', 'name':'Region'},	
			{'field': 'currentPhaseCode', 'name':'Phase'},
			{'field': 'dateUpdated', 'name':'Date Updated'},
			{'field': 'dateCreate', 'name':'Date Created'},			
		];

    }        

})();

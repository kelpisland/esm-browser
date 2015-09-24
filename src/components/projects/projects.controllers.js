(function () {

    'use strict';

    angular.module('app.projects')
		// General
        .controller('controllerProjectsFilterBar', controllerProjectsFilterBar)

		// Public
        .controller('controllerPublicProjects', controllerPublicProjects)

		// Proponents
		.controller('controllerProponentProjects', controllerProponentProjects)
        
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
		});

		//
		vm.goToProject = function(id) {
			$state.go('public.project', {id:id});
		};	
		
		vm.filterKeyword = '';
		vm.filterObject = {};
		vm.view = 'map';

    }
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

		//
		vm.goToProject = function(id) {
			$state.go('public.project', {id:id});
		};	

		vm.proponent = Global.user;

		vm.view = 'list';

    }    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Proponent Filter Bar
	//
    // -----------------------------------------------------------------------------------
    controllerProjectsFilterBar.$inject = ['logger', '$state', 'Projects'];
    /* @ngInject */
    function controllerProjectsFilterBar(logger, $state, Projects) {
		var fbc = this;

		Projects.getProjectTypes().then( function(res) {
			fbc.types = res.data;
		});

    }    


})();

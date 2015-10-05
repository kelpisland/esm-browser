(function () {

    'use strict';

    angular.module('app.project')
    	// EAO
        .controller('controllerEAOProject', controllerEAOProject)
		.controller('controllerEAOProjectNew', controllerEAOProjectNew);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Project Detail
	//
    // -----------------------------------------------------------------------------------
    controllerEAOProject.$inject = ['Project', '$stateParams'];
	//
	function controllerEAOProject(Project, $stateParams) {
		var vm = this;
		//
		// Get Project
		Project.getProject({id: $stateParams.id}).then(function(res) {
			vm.project = res.data;
		});

    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: ERAO Project New
	//
    // -----------------------------------------------------------------------------------    
    controllerEAOProjectNew.$inject = ['logger'];
	//
	function controllerEAOProjectNew(logger) {
		var vm = this;
    }
	
})();
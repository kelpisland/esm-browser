(function () {

    'use strict';

    angular.module('app.project')
    	// EAO
        .controller('controllerEAOProject', controllerEAOProject)
		.controller('controllerEAOProjectNew', controllerEAOProjectNew)
		.controller('controllerModalProjectEditPlanPhases', controllerModalProjectEditPlanPhases)
		.controller('controllerModalProjectEditPlanSchedule', controllerModalProjectEditPlanSchedule)
		.controller('controllerModalProjectEditPlanActivities', controllerModalProjectEditPlanActivities)
		.controller('controllerModalProjectEditPlanComponents', controllerModalProjectEditPlanComponents);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Project Detail
	//
    // -----------------------------------------------------------------------------------
    controllerEAOProject.$inject = ['Project', '$stateParams'];
	//
	function controllerEAOProject(Project, $stateParams) {
		var vm = this;
		
		// show activities first
		vm.mainView = 'activity';
		vm.artifactView = 'inprogress';
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
    };
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Project Schedule
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEditPlanPhases.$inject = ['$modalInstance', 'rProject', 'Utils'];
    //
    function controllerModalProjectEditPlanPhases($modalInstance, rProject, Utils) { 
		var pestag = this;
		
		// remove a Phase from the temporary list.
		pestag.removePhaseFromProject = function(idx) {
			pestag.projectPhases.splice(idx, 1);
		};

		// remove a Phase from the temporary list.
		pestag.addPhaseToProject = function(phase) {
			pestag.projectPhases.push(phase);
		};

		// remove a Phase from the temporary list.
		pestag.addPhaseToProject = function(phase) {
			pestag.projectPhases.push(phase);
		};
		
		// remove a Phase from the temporary list.
		pestag.inProject = function(phase) {
			return _.includes(pestag.projectPhases, phase);
		};
		
		// TODO: manually sort the Phase list.
		
		// set local var to passed project
		pestag.project = rProject;

		// copy the Phases so we can cancel the changes.
		pestag.projectPhases = angular.copy(rProject.phases) || [];

		Utils.getProjectPhases().then( function(res) {
			pestag.allPhases = res.data;
		});

		pestag.cancel = function () { $modalInstance.dismiss('cancel'); };
		pestag.ok = function () { 
			// saving so write the new data.
			rProject.phases = angular.copy(pestag.projectPhases);
			$modalInstance.close();
		};
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Edit Project Schedule
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEditPlanSchedule.$inject = ['$modalInstance', 'rProject'];
    //
    function controllerModalProjectEditPlanSchedule($modalInstance, rProject) { 
		var pesched = this;
		
		// set local var to passed project
		pesched.project = rProject;

		pesched.cancel = function () { $modalInstance.dismiss('cancel'); };
		pesched.ok = function () { 
			// saving so write the new data.
			rProject = angular.copy(pesched.project);
			$modalInstance.close();
		};	
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Edit Project Activities
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEditPlanActivities.$inject = ['$scope', '$modalInstance', 'rProject', 'Utils'];
    //
    function controllerModalProjectEditPlanActivities($scope, $modalInstance, rProject, Utils) { 
		var peact = this;
		
		// set local var to passed project
		peact.project = rProject;

		$scope._ = _;

		// get roles
		Utils.getRoles().then( function(res) {
			peact.roles = res.data;
		});

		// 
		peact.toggleAccess = function(activity, role) {
			if( _.contains(activity.access, role) ) {
				// remove
				_.remove(activity.access, function(item) {
					return item === role;
				});
			} else {
				activity.access.push(role);			
			}

		};

		peact.cancel = function () { $modalInstance.dismiss('cancel'); };
		peact.ok = function () { 
			// saving so write the new data.
			rProject = angular.copy(peact.project);
			$modalInstance.close();
		};
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Edit Project Components
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEditPlanComponents.$inject = ['$scope', '$modalInstance', 'rProject'];
    //
    function controllerModalProjectEditPlanComponents($scope, $modalInstance, rProject) { 
		var pecomp = this;
		
		// set local var to passed project
		pecomp.project = rProject;
	
		$scope.filter = {
			active: true,
			value: true,
			other: false,
			inactive: false
		};


		pecomp.cancel = function () { $modalInstance.dismiss('cancel'); };
		pecomp.ok = function () { 
			// saving so write the new data.
			rProject = angular.copy(pecomp.project);
			$modalInstance.close();
		};
	};

	
	
	
	
})();
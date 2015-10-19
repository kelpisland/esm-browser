(function () {

    'use strict';

    angular.module('app.project')
    	// EAO
        .controller('controllerEAOProject', controllerEAOProject)
		.controller('controllerEAOProjectNew', controllerEAOProjectNew)
		.controller('controllerModalProjectEditPlanStages', controllerModalProjectEditPlanStages)
		.controller('controllerModalProjectEditPlanSchedule', controllerModalProjectEditPlanSchedule)
		.controller('controllerModalProjectEditPlanActivities', controllerModalProjectEditPlanActivities);

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
    controllerModalProjectEditPlanStages.$inject = ['$modalInstance', 'rProject', 'Utils'];
    //
    function controllerModalProjectEditPlanStages($modalInstance, rProject, Utils) { 
		var pestag = this;
		
		// remove a stage from the temporary list.
		pestag.removeStageFromProject = function(idx) {
			pestag.projectStages.splice(idx, 1);
		};

		// remove a stage from the temporary list.
		pestag.addStageToProject = function(stage) {
			pestag.projectStages.push(stage);
		};

		// remove a stage from the temporary list.
		pestag.addStageToProject = function(stage) {
			pestag.projectStages.push(stage);
		};
		
		// remove a stage from the temporary list.
		pestag.inProject = function(stage) {
			return _.includes(pestag.projectStages, stage);
		};
		
		// TODO: manually sort the stage list.
		
		// set local var to passed project
		pestag.project = rProject;

		// copy the stages so we can cancel the changes.
		pestag.projectStages = angular.copy(rProject.stages) || [];

		Utils.getProjectStages().then( function(res) {
			pestag.allStages = res.data;
		});

		pestag.cancel = function () { $modalInstance.dismiss('cancel'); };
		pestag.ok = function () { 
			// saving so write the new data.
			rProject.stages = angular.copy(pestag.projectStages);
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
	
	
	
	
	
})();
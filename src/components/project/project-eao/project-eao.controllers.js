(function () {

    'use strict';

    angular.module('app.project')
    	// EAO
        .controller('controllerEAOProject', controllerEAOProject)
		.controller('controllerEAOProjectNew', controllerEAOProjectNew)
		.controller('controllerEAOProjectIntake', controllerEAOProjectIntake)
		.controller('controllerModalProjectEdit', controllerModalProjectEdit)
		.controller('controllerModalProjectEditPlanMilestones', controllerModalProjectEditPlanMilestones)
		.controller('controllerModalProjectEditPlanSchedule', controllerModalProjectEditPlanSchedule)
		.controller('controllerModalProjectEditPlanActivities', controllerModalProjectEditPlanActivities)
		.controller('controllerModalProjectEditPlanArtifacts', controllerModalProjectEditPlanArtifacts);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Project Detail
	//
    // -----------------------------------------------------------------------------------
    controllerEAOProject.$inject = ['$scope', 'Project', '$stateParams'];
	//
	function controllerEAOProject($scope, Project, $stateParams) {
		var vm = this;
		
		// show activities first
		vm.mainView = 'activity';
		vm.activityView = 'open';
		vm.artifactView = 'inprogress';
		//
		// Get Project
		Project.getLocalProject({id: $stateParams.id}).then(function(res) {
			vm.project = res.data;
		});

		// vm.filterActivity = function(filter) {
		// 	vm.activityView = filter;
		// 	$scope.$broadcast('filterActivityList', {'filterValue':filter});
		// };

    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: ERAO Project New
	//
    // -----------------------------------------------------------------------------------    
    controllerEAOProjectNew.$inject = ['Project'];
	//
	function controllerEAOProjectNew(Project) {
		var projectNew = this;

		Project.getProjectIntakeQuestions().then( function(res) {
			projectNew.questions = res.data;			
		});

		// Get blank project
		Project.getNewProject().then( function(res) {
			projectNew.project = res.data;
		});

		projectNew.saveProject = function() {
			Project.addProject(projectNew.project).then( function(res) {
				console.log(res);
			});
		};

    };
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: ERAO Project New
	//
    // -----------------------------------------------------------------------------------    
    controllerEAOProjectIntake.$inject = ['$state', 'Project'];
	//
	function controllerEAOProjectIntake($state, Project) {
		var projectIntake = this;

		Project.getProjectIntakeQuestions().then( function(res) {
			projectIntake.questions = res.data;			
		});

		Project.getProject($state.params.id).then( function(res) {
			projectIntake.project = res.data;
		})

		projectIntake.saveProject = function() {
			Project.saveProject(projectIntake.project).then( function(res) {
				console.log(res);
			});
		};

    };    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Project Schedule
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEdit.$inject = ['$modalInstance', 'rProject', 'Utils'];
    //
    function controllerModalProjectEdit($modalInstance, rProject, Utils) { 
		var projectEdit = this;
		
		// set local var to passed project
		projectEdit.project = rProject;

		projectEdit.cancel = function () { $modalInstance.dismiss('cancel'); };
		projectEdit.ok = function () { $modalInstance.close(); };
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Project Schedule
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectEditPlanMilestones.$inject = ['$modalInstance', 'rProject', 'Utils'];
    //
    function controllerModalProjectEditPlanMilestones($modalInstance, rProject, Utils) { 
		var pestag = this;
		
		// remove a milestone from the temporary list.
		pestag.removeMilestoneFromProject = function(idx) {
			pestag.projectMilestones.splice(idx, 1);
		};

		// add the milestone to the project
		pestag.addMilestoneToProject = function(milestone) {
			pestag.projectMilestones.push(milestone);
		};

	
		// is the milestone already in the project?
		pestag.inProject = function(milestone) {
			return _.includes(pestag.projectMilestones, milestone);
		};
		
		// TODO: manually sort the milestone list.
		
		// set local var to passed project
		pestag.project = rProject;

		// copy the milestones so we can cancel the changes.
		pestag.projectMilestones = angular.copy(rProject.milestones) || [];

		Utils.getProjectMilestones().then( function(res) {
			pestag.allMilestones = res.data;
		});

		pestag.cancel = function () { $modalInstance.dismiss('cancel'); };
		pestag.ok = function () { 
			// saving so write the new data.
			rProject.milestones = angular.copy(pestag.projectMilestones);
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
		
		$scope._ = _;

		// set local var to passed project
		peact.project = rProject;

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
    controllerModalProjectEditPlanArtifacts.$inject = ['$scope', '$modalInstance', 'rProject'];
    //
    function controllerModalProjectEditPlanArtifacts($scope, $modalInstance, rProject) { 
		var peart = this;
		
		// set local var to passed project
		peart.project = rProject;
	
		$scope.filter = {
			active: true,
			value: true,
			other: false,
			inactive: false
		};


		peart.cancel = function () { $modalInstance.dismiss('cancel'); };
		peart.ok = function () { 
			// saving so write the new data.
			rProject = angular.copy(peart.project);
			$modalInstance.close();
		};
	};

	
	
	
	
})();
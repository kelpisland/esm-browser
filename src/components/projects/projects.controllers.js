(function () {

    'use strict';

    angular.module('app.projects')
		// General
        .controller('controllerProjectsFilterBar', controllerProjectsFilterBar)
        .controller('controllerProjectsList', controllerProjectsList);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Filter Bar
	//
    // -----------------------------------------------------------------------------------
    controllerProjectsFilterBar.$inject = ['logger', '$state', 'Projects', 'Global'];
    /* @ngInject */
    function controllerProjectsFilterBar(logger, $state, Projects, Global) {
		var fbc = this;

		Projects.getProjectTypes().then( function(res) {
			fbc.types = res.data;
		});

		Projects.getProjectMilestones().then( function(res) {
			fbc.milestones = res.data;
		});

		fbc.userType = Global.user.type;
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Projects
	//
    // -----------------------------------------------------------------------------------
    controllerProjectsList.$inject = ['$scope', '$state', 'Global'];
    /* @ngInject */
    function controllerProjectsList($scope, $state, Global) {
		var projectList = this;
		
		$scope.$watch('projects', function(newValue) {
			projectList.projects = newValue;
		});
		
		projectList.goToProject = function(projectId) {
			if (Global.user.type === 'eao') {
				$state.go('eao.project', {id:projectId});
			} else {
				$state.go('public.project', ({id:projectId}));
			}
		}
		
    }


})();

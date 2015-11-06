(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplEaoProject', directiveEAOProject)
        .directive('tmplEaoProjectNew', directiveEAOProjectNew)
        .directive('modalProjectEdit', directiveModalProjectEdit)
		.directive('modalProjectEditPlanMilestones', directiveModalProjectEditPlanMilestones)
		.directive('modalProjectEditPlanSchedule', directiveModalProjectEditPlanSchedule)
		.directive('modalProjectEditPlanActivities', directiveModalProjectEditPlanActivities)     
		.directive('modalProjectEditPlanArtifacts', directiveModalProjectEditPlanArtifacts);

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: EAO Project Main
	//
    // -----------------------------------------------------------------------------------
    directiveEAOProject.$inject = [];
    /* @ngInject */
    function directiveEAOProject() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/project-eao/project-eao.html',
            controller: 'controllerEAOProject',
            controllerAs: 'vm'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: EAO Project Main
	//
    // -----------------------------------------------------------------------------------
    directiveEAOProjectNew.$inject = [];
    /* @ngInject */
    function directiveEAOProjectNew() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/project-eao/project-eao-new.html',
            controller: 'controllerEAOProjectNew',
            controllerAs: 'projectNew'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Edit Project
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEdit.$inject = ['$modal', 'Project'];
    /* @ngInject */
    function directiveModalProjectEdit($modal, Project) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {

				var originalProject = angular.copy(scope.project);

				element.on('click', function() {
					var modalMilestoneView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-project.html',
						controller: 'controllerModalProjectEdit',
						controllerAs: 'projectEdit',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalMilestoneView.result.then(function (project) {
						// on ok, save new
						Project.saveProject(scope.project);
					}, function () {
						// on cancel, restore original
						scope.project = angular.copy(originalProject);
					});
				});
			}
        };
        return directive;
    }    
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Edit Project Phases
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanMilestones.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanMilestones($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalMilestoneView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-milestones.html',
						controller: 'controllerModalProjectEditPlanMilestones',
						controllerAs: 'pestag',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalMilestoneView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Edit Project Phases
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanSchedule.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanSchedule($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-schedule.html',
						controller: 'controllerModalProjectEditPlanSchedule',
						controllerAs: 'pesched',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Edit Project Activities
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanActivities.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanActivities($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-activities.html',
						controller: 'controllerModalProjectEditPlanActivities',
						controllerAs: 'peact',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Edit Project Artifacts
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanArtifacts.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanArtifacts($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-artifacts.html',
						controller: 'controllerModalProjectEditPlanArtifacts',
						controllerAs: 'peart',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }


})();
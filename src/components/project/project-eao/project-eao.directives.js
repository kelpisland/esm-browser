(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplEaoProject', directiveEAOProject)
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
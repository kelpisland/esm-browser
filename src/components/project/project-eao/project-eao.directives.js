(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplEaoProject', directiveEAOProject)
		.directive('modalProjectEditPlanPhases', directiveModalProjectEditPlanPhases)
		.directive('modalProjectEditPlanSchedule', directiveModalProjectEditPlanSchedule)
		.directive('modalProjectEditPlanActivities', directiveModalProjectEditPlanActivities)        
		.directive('modalProjectEditPlanComponents', directiveModalProjectEditPlanComponents);

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
    directiveModalProjectEditPlanPhases.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanPhases($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-phases.html',
						controller: 'controllerModalProjectEditPlanPhases',
						controllerAs: 'pestag',
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
	// DIRECTIVE: Modal Edit Project Components
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanComponents.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanComponents($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-components.html',
						controller: 'controllerModalProjectEditPlanComponents',
						controllerAs: 'pecomp',
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
(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplEaoProject', directiveEAOProject)
		.directive('modalProjectEditPlanStages', directiveModalProjectEditPlanStages)
		.directive('modalProjectEditPlanSchedule', directiveModalProjectEditPlanSchedule)
		.directive('modalProjectEditPlanActivities', directiveModalProjectEditPlanActivities);        

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
	// DIRECTIVE: Modal Edit Project Stages
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectEditPlanStages.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectEditPlanStages($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/project-eao/partials/modal-edit-plan-stages.html',
						controller: 'controllerModalProjectEditPlanStages',
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
	// DIRECTIVE: Modal Edit Project Stages
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

})();
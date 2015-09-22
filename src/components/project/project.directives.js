(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplPublicProject', directivePublicProject)
        .directive('tmplProponentProject', directiveProponentProject)
        .directive('modalProponentAccess', directiveModalProponentAccess)        
        .directive('modalProjectSchedule', directiveModalProjectSchedule);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Project Main
	//
    // -----------------------------------------------------------------------------------
    directivePublicProject.$inject = [];
    /* @ngInject */
    function directivePublicProject() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/public-project.html',
            controller: 'controllerPublicProject',
            controllerAs: 'vm'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Proponent Project Main
	//
    // -----------------------------------------------------------------------------------
    directiveProponentProject.$inject = [];
    /* @ngInject */
    function directiveProponentProject() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/proponent-project.html',
            controller: 'controllerProponentProject',
            controllerAs: 'vm'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Project Schedule
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectSchedule.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectSchedule($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/partials/modal_project_schedule.html',
						controller: 'ModalProjectSchedule',
						controllerAs: 'ps',
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
	// DIRECTIVE: Modal Proponent Access
	//
    // -----------------------------------------------------------------------------------
    directiveModalProponentAccess.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProponentAccess($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/partials/modal_proponent_access.html',
						controller: 'ModalProponentAccess',
						controllerAs: 'pa',
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
(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplProponentProject', directiveProponentProject)
        .directive('tmplProponentProjectNew', directiveProponentProjectNew)      
        .directive('modalProponentAccess', directiveModalProponentAccess);
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
            templateUrl: 'components/project/project-proponent/project-proponent.html',
            controller: 'controllerProponentProject',
            controllerAs: 'vm'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Proponent Project New
	//
    // -----------------------------------------------------------------------------------
    directiveProponentProjectNew.$inject = [];
    /* @ngInject */
    function directiveProponentProjectNew() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/project-proponent/proponent-project-new.html',
            controller: 'controllerProponentProjectNew',
            controllerAs: 'vm'
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
						templateUrl: 'components/project/project-proponent/partials/modal-proponent-access.html',
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
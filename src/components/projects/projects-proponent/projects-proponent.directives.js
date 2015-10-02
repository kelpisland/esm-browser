(function () {

    'use strict';

    angular.module('app.projects')
		// Proponent
		.directive('tmplProponentProjects', directiveProponentProjects)

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Proponent Projects Main
	//
    // -----------------------------------------------------------------------------------
    directiveProponentProjects.$inject = [];
    /* @ngInject */
    function directiveProponentProjects() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/projects-proponent/projects-proponent.html',
            controller: 'controllerProponentProjects',
            controllerAs: 'vm'
        };
        return directive;
    }    

})();

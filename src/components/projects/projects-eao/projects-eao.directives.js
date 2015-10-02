(function () {

    'use strict';

    angular.module('app.projects')
		// EAO
		.directive('tmplEaoProjects', directiveEAOProjects)		

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Staff Projects Main List
	//
    // -----------------------------------------------------------------------------------
    directiveEAOProjects.$inject = [];
    /* @ngInject */
    function directiveEAOProjects() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/projects-eao/projects-eao.html',
            controller: 'controllerEAOProjects',
            controllerAs: 'vm'
        };
        return directive;
    }

})();

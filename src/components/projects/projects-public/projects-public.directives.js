(function () {

    'use strict';

    angular.module('app.projects')
    	// Public
        .directive('tmplPublicProjects', directivePublicProjects)

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    directivePublicProjects.$inject = [];
    /* @ngInject */
    function directivePublicProjects() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/projects-public/projects-public.html',
            controller: 'controllerPublicProjects',
            controllerAs: 'vm'
        };
        return directive;
    }

})();

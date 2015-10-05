(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplPublicProject', directivePublicProject)
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
            templateUrl: 'components/project/project-public/project-public.html',
            controller: 'controllerPublicProject',
            controllerAs: 'vm'
        };
        return directive;
    }
})();
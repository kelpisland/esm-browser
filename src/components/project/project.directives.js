(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplPublicProject', directivePublicProject)
        .directive('tmplProponentProject', directiveProponentProject);
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

})();
(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplPublicProject', directivePublicProject);
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

})();
(function () {

    'use strict';

    angular.module('app.project')
        .directive('tmplEaoProject', directiveEAOProject);

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


})();
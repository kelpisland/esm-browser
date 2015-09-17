(function () {

    'use strict';

    angular.module('app.default')
        .directive('tmplDefault', directiveDefault)
        .controller('controllerDefault', controllerDefault);


    // ----- directiveFunction -----
    directiveDefault.$inject = [];

    /* @ngInject */
    function directiveDefault() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/default/default.html',
            controller: 'controllerDefault',
            controllerAs: 'df'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    controllerDefault.$inject = [];

    /* @ngInject */
    function controllerDefault() {
    }

})();

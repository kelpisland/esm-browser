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
            controllerAs: 'def'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    controllerDefault.$inject = ['Global', '$state', '$rootScope'];

    /* @ngInject */
    function controllerDefault(Global, $state, $rootScope) {
    	var def = this;

        // detect login, if no session, go to login
        $state.go('login');
    
    }

})();

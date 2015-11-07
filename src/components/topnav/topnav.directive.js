(function () {
    'use strict';

    angular
        .module('app.topnav')
        .directive('tmplTopnav', directiveTopNav)
        .controller('controllerTopNav', controllerTopNav);


    // ----- directiveFunction -----
    directiveTopNav.$inject = [];

    /* @ngInject */
    function directiveTopNav() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/topnav/topnav.html',
            scope: {
            },
            controller: 'controllerTopNav',
            controllerAs: 'tNav'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    controllerTopNav.$inject = ['$rootScope', 'Global'];

    /* @ngInject */
    function controllerTopNav($rootScope, Global) {
        var tNav = this;
        tNav.user = Global.user;
    }

})();

(function () {

    'use strict';

    angular.module('app.auth')
        .directive('tmplLogin', directiveLogin)
		.directive('tmplRegister', directiveRegister)
		.directive('tmplRecover', directiveRecover);

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Login
	//
    // -----------------------------------------------------------------------------------
    function directiveLogin() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/auth/login.html',
            controller: 'controllerLogin',
            controllerAs: 'loginPanel'
        };

        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Register
	//
    // -----------------------------------------------------------------------------------
    function directiveRegister() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/auth/register.html',
            controller: 'controllerRegister',
            controllerAs: 'registerPanel'
        };

        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Recover Password
	//
    // -----------------------------------------------------------------------------------
    function directiveRecover() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/auth/recover.html',
            controller: 'controllerRecover',
            controllerAs: 'recoverPanel'
        };

        return directive;
    }

})();

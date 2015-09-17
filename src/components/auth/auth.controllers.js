(function () {

    'use strict';

    angular.module('app.auth')
        .controller('controllerLogin', controllerLogin)
        .controller('controllerRegister', controllerRegister)
        .controller('controllerRecover', controllerRecover);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Login
	//
    // -----------------------------------------------------------------------------------
    controllerLogin.$inject = [];

    /* @ngInject */
    function controllerLogin() {
		var loginPanel = this;

		loginPanel.error = null;

		loginPanel.login = function() {
			loginPanel.error = "Incorrect Login";
		};
		
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Registers
	//
    // -----------------------------------------------------------------------------------
    controllerRegister.$inject = [];

    /* @ngInject */
    function controllerRegister() {
		var registerPanel = this;
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Recover
	//
    // -----------------------------------------------------------------------------------
    controllerRecover.$inject = [];

    /* @ngInject */
    function controllerRecover() {
		var recoverPanel = this;
    }

})();

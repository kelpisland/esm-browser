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
    controllerLogin.$inject = ['$scope', '$state', 'ipCookie'];

    /* @ngInject */
    function controllerLogin($scope, $state, ipCookie) {
		var loginPanel = this;

		loginPanel.error = null;

		loginPanel.login = function() {
			loginPanel.error = "Incorrect Login";
		};
		
        loginPanel.loginEAO = function(){
            ipCookie('EAO_user', 'eao');
            $scope.$emit('loggedIn', 'eao');
            $state.go('eao.projects');
        }

        loginPanel.loginPublic = function(){
            ipCookie('EAO_user', 'public');
            $scope.$emit('loggedIn', 'public');
            $state.go('public.projects');
        }



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

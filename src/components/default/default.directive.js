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
        // otherwise go to appropriate project space



		// def.publicUser = function() {
 	// 		Global.user.name = 'Public';
 	// 		Global.public = true;
 	// 		Global.user.type = 'Public';

 	// 		$rootScope.$emit('loggedIn');

 	// 		$state.go('public.projects');
		// };

		// def.proponentUser = function() {
 	// 		Global.user.name = 'Proponent';
 	// 		Global.public = false;
 	// 		Global.user.type = 'Proponent';

 	// 		$rootScope.$emit('loggedIn');
 			
  // 			$state.go('proponent.projects');
		// };

		// def.eaoUser = function() {
 	// 		Global.user.name = 'EAO';
 	// 		Global.public = false;
 	// 		Global.user.type = 'EAO';
 			
 	// 		$rootScope.$emit('loggedIn');
  			
  // 			$state.go('eao.projects');
		// };
    
    }

})();

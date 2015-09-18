(function () {

    'use strict';

    angular.module('app.approot')
        .service('Global', serviceGlobal);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceGlobal.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceGlobal($http, API) {
    	var getProponent = function(req) {
			return $http({method:'GET',url: API + '/v1/user/proponent'}); // This should return the logged in user according to the authenticated profile on the server.
		};
		return {
			getProponent: getProponent
		};
    }

})();
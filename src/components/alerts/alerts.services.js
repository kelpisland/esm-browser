(function () {

    'use strict';

    angular.module('app.alerts')
        .service('Alerts', serviceAlerts);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceAlerts.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceAlerts($http, API) {

    	// get all ids by user
		var getAlerts = function(req) {
			return $http({method:'GET',url: API + '/v1/alerts/user'});
		};

		// get single alert by id
		var getAlert = function(req) {
			return $http({method:'GET',url: API + '/v1/alert/:id'});
		};

		// get blank object
		var getNew = function(req) {
			return $http({method:'GET',url: API + '/v1/alertNew'});		
		};

		return {
			getAlerts: getAlerts,
			getAlert: getAlert,
			getNew: getNew 
		};
    }

})();
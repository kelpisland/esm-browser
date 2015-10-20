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
		var getAlerts = function(req) {
			return $http({method:'GET',url: API + '/v1/alerts/user'});
		};

		return {
			getAlerts: getAlerts
		};
    }

})();
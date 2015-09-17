(function () {

    'use strict';

    angular.module('app.utils')
        .service('Utils', serviceUtils);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceUtils.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceUtils($http, API) {
    	var getRecentActivity = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/recentactivity'});
		};
    	var getQuickLinks = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/quicklinks'});
		};
		return {
			getRecentActivity: getRecentActivity,
			getQuickLinks: getQuickLinks
		};
    }

})();
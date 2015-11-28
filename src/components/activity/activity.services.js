(function () {

    'use strict';

    angular.module('app.activity')
        .service('Activity', serviceActivity);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceActivity.$inject = ['$http', 'API', 'SERVERAPI'];
    /* @ngInject */
    function serviceActivity($http, API, SERVERAPI) {
		// var getProjectActivities = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/activities/' + req.id});
		// };
		var getProjectActivity = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/activity/' + req.id});
		};
		var getResponseRevisions = function(req) {
			return $http({method:'GET',url: API + '/v1/responseRevisions/' + req.id});
		};

		return {
			// getProjectActivities: getProjectActivities,
			getProjectActivity: getProjectActivity,
			getResponseRevisions: getResponseRevisions
		};
    }

})();
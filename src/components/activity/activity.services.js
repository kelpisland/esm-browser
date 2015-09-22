(function () {

    'use strict';

    angular.module('app.activity')
        .service('Activity', serviceActivity);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceActivity.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceActivity($http, API) {
		var getProjectActivities = function(req) {
			return $http({method:'GET',url: API + '/v1/activities/' + req.id});
		};
		return {
			getProjectActivities: getProjectActivities
		};
    }

})();
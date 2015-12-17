(function () {

    'use strict';

    angular.module('app.activity')
        .service('Activity', serviceActivity);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceActivity.$inject = ['$http', 'SERVERAPI'];
    /* @ngInject */
    function serviceActivity($http, SERVERAPI) {

		var getProjectActivity = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/activity/' + req.id});
		};

		return {
			getProjectActivity: getProjectActivity
		};
    }

})();
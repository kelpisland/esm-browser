(function () {

    'use strict';

    angular.module('app.tasks')
        .service('Task', serviceTasks);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceTasks.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceTasks($http, API) {
		var getTaskData = function(req) {
			return $http({method:'GET',url: API + '/v1/task/' + req.code + '/' + req.id});
		};

		return {
			getTaskData: getTaskData
		};
    }

})();
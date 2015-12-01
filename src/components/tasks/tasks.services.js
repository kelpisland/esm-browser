(function () {

    'use strict';

    angular.module('app.tasks')
        .service('Task', serviceTasks);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceTasks.$inject = ['$http', 'API', 'SERVERAPI'];
    /* @ngInject */
    function serviceTasks($http, API, SERVERAPI) {
		var getTaskData = function(req) {
			return $http({method:'GET',url: API + '/v1/task/' + req.code + '/' + req.id});
		};

		var updateTask = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/task/' + req._id, data: req});
		};

		return {
			updateTask: updateTask,
			getTaskData: getTaskData
		};
    }

})();
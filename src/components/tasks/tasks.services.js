(function () {

    'use strict';

    angular.module('app.tasks')
        .service('Tasks', serviceTasks);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceTasks.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceTasks($http, API) {
		var getItem = function(req) {
			return $http({method:'GET',url: API + '/v1/item/' + req.id});
		};

		return {
			getItem: getItem
		};
    }

})();
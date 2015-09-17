(function () {

    'use strict';

    angular.module('app.project')
        .service('Project', serviceProject);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceProject.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceProject($http, API) {
		var getPublicProject = function(req) {
			return $http({method:'GET',url: API + '/v1/public/project/' + req.id});
		};
    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/project/types'});
		};
		return {
			getPublicProject: getPublicProject,
			getProjectTypes: getProjectTypes
		};
    }

})();
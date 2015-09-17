(function () {

    'use strict';

    angular.module('app.projects')
        .service('Projects', serviceProjects);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceProjects.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceProjects($http, API) {
    	var getPublicProjects = function(req) {
			return $http({method:'GET',url: API + '/v1/public/projects'});
		};
    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/project/types'});
		};
		return {
			getPublicProjects: getPublicProjects,
			getProjectTypes: getProjectTypes
		};
    }

})();
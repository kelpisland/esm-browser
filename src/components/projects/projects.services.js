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
    	var getProjects = function(req) {
			return $http({method:'GET',url: API + '/v1/projects'});
		};
    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/projecttypes'});
		};
    	var getProjectStages = function(req) {
			return $http({method:'GET',url: API + '/v1/projectstages'});
		};
		return {
			getProjects: getProjects,
			getProjectTypes: getProjectTypes,
			getProjectStages: getProjectStages
		};
    }

})();
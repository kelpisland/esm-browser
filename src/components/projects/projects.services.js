(function () {

    'use strict';

    angular.module('app.projects')
        .service('Projects', serviceProjects);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceProjects.$inject = ['$http', 'API', 'SERVERAPI'];
    /* @ngInject */
    function serviceProjects($http, API, SERVERAPI) {
    	var getLocalProjects = function(req) {
			return $http({method:'GET',url: API + '/v1/projects'});
		};
    	var getProjects = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/project'});
		};
    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/projectTypes'});
		};
    	var getProjectMilestones = function(req) {
			return $http({method:'GET',url: API + '/v1/projectMilestones'});
		};
		return {
			getLocalProjects: getLocalProjects,
			getProjects: getProjects,
			getProjectTypes: getProjectTypes,
			getProjectMilestones: getProjectMilestones
		};
    }

})();
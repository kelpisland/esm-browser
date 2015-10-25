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
		var getProject = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id});
		};
    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/project/types'});
		};
    	var getProjectBuckets = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/buckets'});
		};
    	var getProjectTags = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/tags'});
		};		
    	var getProjectResearch = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/research'});
		};		
    	var getProjectRelatedResearch = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/researchRelated'});
		};		
    	var getProjectLayers = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/layers'});
		};		
    	var getProjectContacts = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id + '/contacts'});
		};

		return {
			getProject: getProject,
			getProjectTypes: getProjectTypes,
			getProjectBuckets: getProjectBuckets,
			getProjectTags: getProjectTags,
			getProjectResearch: getProjectResearch,
			getProjectRelatedResearch: getProjectRelatedResearch,
			getProjectLayers: getProjectLayers,
			getProjectContacts: getProjectContacts
		};
    }

})();
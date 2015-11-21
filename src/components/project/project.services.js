(function () {

    'use strict';

    angular.module('app.project')
        .service('Project', serviceProject);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceProject.$inject = ['$http', 'API', 'SERVERAPI'];
    /* @ngInject */
    function serviceProject($http, API, SERVERAPI) {

    	var getNewProject = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/new/project/'});
    	};

		var getLocalProject = function(req) {
			return $http({method:'GET',url: API + '/v1/project/' + req.id});
		};

		var getProject = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/project/' + req.id});
		};

		var addProject = function(req) {
			return $http({method:'POST',url: SERVERAPI + '/project', data: req});
		};

		var saveProject = function(req) {
			console.log(req);
			return $http({method:'PUT',url: SERVERAPI + '/project/' + req.id, data: req});
		};





    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/projectTypes'});
		};

    	var getProjectIntakeQuestions = function(req) {
			return $http({method:'GET',url: API + '/v1/projectIntakeQuestions'});
		};


  //   	var getProjectBuckets = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/buckets'});
		// };
  //   	var getProjectTags = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/tags'});
		// };		
  //   	var getProjectResearch = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/research'});
		// };		
  //   	var getProjectRelatedResearch = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/researchRelated'});
		// };		
  //   	var getProjectLayers = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/layers'});
		// };		
  //   	var getProjectContacts = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/project/' + req.id + '/contacts'});
		// };

		return {
			getNewProject: getNewProject,
			getLocalProject: getLocalProject,
			getProject: getProject,
			addProject: addProject,
			saveProject: saveProject,
			getProjectTypes: getProjectTypes,
			getProjectIntakeQuestions, getProjectIntakeQuestions
			// getProjectBuckets: getProjectBuckets,
			// getProjectTags: getProjectTags,
			// getProjectResearch: getProjectResearch,
			// getProjectRelatedResearch: getProjectRelatedResearch,
			// getProjectLayers: getProjectLayers,
			// getProjectContacts: getProjectContacts
		};
    }

})();
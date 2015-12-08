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
			console.log('getproject', req.id);
			return $http({method:'GET',url: SERVERAPI + '/project/' + req.id});
		};

		var addProject = function(req) {
			return $http({method:'POST',url: SERVERAPI + '/project', data: req});
		};

		var saveProject = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/project/' + req._id, data: req});
		};


		var setProjectStream = function(projectId, streamId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/' + projectId + '/set/stream/' + streamId});
		};

    	var getProjectTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/projectTypes'});
		};

    	var getProjectIntakeQuestions = function(req) {
			return $http({method:'GET',url: API + '/v1/projectIntakeQuestions'});
		};

		var updateMilestone = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/milestone/' + req._id, data: req});
		};


		// Add elements to projects

		var addBucketToProject = function(projectId, bucketId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/' + projectId + '/add/bucket/' + bucketId});
		};

		var addPhaseToProject = function(projectId, phaseId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/' + projectId + '/add/phase/' + phaseId});
		};

		var addMilestoneToPhase = function(phaseId, milestoneId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/phase/' + phaseId + '/add/milestone/' + milestoneId});
		};

		var addActivityToPhase = function(phaseId, activityId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/phase/' + phaseId + '/add/activity/' + activityId});
		};

		var addTaskToActivity = function(activityId, taskId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/activity/' + activityId + '/add/task/' + taskId});
		};

		var addRequirementToTask = function(taskId, requirementId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/task/' + taskId + '/add/requirement/' + requirementId});
		};

		var addRequirementToMilestone = function(milestoneId, requirementId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/milestone/' + milestoneId + '/add/project/requirement/' + requirementId});
		};

		var addRequirementToBucket = function(bucketId, requirementId) {
			return $http({method:'PUT',url: SERVERAPI + '/project/bucket/' + bucketId + '/add/project/requirement/' + requirementId});
		};



		return {
			getNewProject: getNewProject,
			getLocalProject: getLocalProject,
			getProject: getProject,
			addProject: addProject,
			saveProject: saveProject,
			setProjectStream, setProjectStream,
			getProjectTypes: getProjectTypes,
			getProjectIntakeQuestions, getProjectIntakeQuestions,
			updateMilestone: updateMilestone,
			addBucketToProject: addBucketToProject,
			addPhaseToProject: addPhaseToProject,
			addMilestoneToPhase: addMilestoneToPhase,
			addActivityToPhase: addActivityToPhase,
			addTaskToActivity: addTaskToActivity,
			addRequirementToTask: addRequirementToTask,
			addRequirementToMilestone: addRequirementToMilestone,
			addRequirementToBucket: addRequirementToBucket
			// getProjectBuckets: getProjectBuckets,
			// getProjectTags: getProjectTags,
			// getProjectResearch: getProjectResearch,
			// getProjectRelatedResearch: getProjectRelatedResearch,
			// getProjectLayers: getProjectLayers,
			// getProjectContacts: getProjectContacts
		};
    }

})();
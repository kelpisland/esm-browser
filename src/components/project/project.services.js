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

		var getProject = function(req) {
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



		var getNewPublicComment = function() {
			return $http({method:'GET',url: SERVERAPI + '/new/publiccomment'});
		};

		var addPublicComment = function(req) {
			return $http({method:'POST',url: SERVERAPI + '/publiccomment', data: req});
		};

		var getPublicCommentsPublished = function(projectId) {
			return $http({method:'GET',url: SERVERAPI + '/publiccomment/project/' + projectId + '/published'});
		};

		var getPublicCommentsUnpublished = function(projectId) {
			return $http({method:'GET',url: SERVERAPI + '/publiccomment/project/' + projectId + '/unpublished'});
		};

		var getPublicCommentsUnpublishedLimit = function(projectId, limit, offset) {
			return $http({method:'GET',url: SERVERAPI + '/publiccomment/project/' + projectId + '/unpublished/limit/' + limit + '/offset/' + offset});
		};


		var updatePublicCommentEAOPublish = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccomment/' + req._id + '/eao/publish'});
		};

		var updatePublicCommentEAODefer = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccomment/' + req._id + '/eao/defer'});
		};

		var updatePublicCommentEAOReject = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccomment/' + req._id + '/eao/reject'});
		};



		var updatePublicCommentDocumentEAOPublish = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccommentdocument/' + req._id + '/eao/publish'});
		};

		var updatePublicCommentDocumentEAODefer = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccommentdocument/' + req._id + '/eao/defer'});
		};

		var updatePublicCommentDocumentEAOReject = function(req) {
			return $http({method:'PUT',url: SERVERAPI + '/publiccommentdocument/' + req._id + '/eao/reject'});
		};



		return {
			getNewProject: getNewProject,
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
			addRequirementToBucket: addRequirementToBucket,

			getNewPublicComment: getNewPublicComment,
			addPublicComment: addPublicComment,
			getPublicCommentsPublished: getPublicCommentsPublished,
			getPublicCommentsUnpublished: getPublicCommentsUnpublished,
			getPublicCommentsUnpublishedLimit: getPublicCommentsUnpublishedLimit,

			updatePublicCommentEAOPublish: updatePublicCommentEAOPublish,
			updatePublicCommentEAODefer: updatePublicCommentEAODefer,
			updatePublicCommentEAOReject: updatePublicCommentEAOReject,

			updatePublicCommentDocumentEAOPublish: updatePublicCommentDocumentEAOPublish,
			updatePublicCommentDocumentEAODefer: updatePublicCommentDocumentEAODefer,
			updatePublicCommentDocumentEAOReject: updatePublicCommentDocumentEAOReject

			// getProjectBuckets: getProjectBuckets,
			// getProjectTags: getProjectTags,
			// getProjectResearch: getProjectResearch,
			// getProjectRelatedResearch: getProjectRelatedResearch,
			// getProjectLayers: getProjectLayers,
			// getProjectContacts: getProjectContacts
		};
    }

})();
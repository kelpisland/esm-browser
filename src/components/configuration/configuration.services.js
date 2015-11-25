(function() {
    'use strict';

    angular.module('app.configuration')
        .service('Configuration', serviceConfiguration);
    // -----------------------------------------------------------------------------------
	//
	// Service: Configuration Services
	//
    // -----------------------------------------------------------------------------------
    serviceConfiguration.$inject = ['$http', 'SERVERAPI'];
    /* @ngInject */
    function serviceConfiguration($http, SERVERAPI) {

        // Generalized config items.
        // the context defines the url.
        var getConfig = function() {
            return $http({method:'GET',url: SERVERAPI + '/sys/configs'});
        };

        var getStreams = function() {
            return $http({method:'GET',url: SERVERAPI + '/stream'});
        };

        var getConfigItem = function(context) {
            console.log('context', context);
            return $http({method:'GET',url: SERVERAPI + '/' + context});
        };
        var newConfigItem = function(context) {
            return $http({method:'GET',url: SERVERAPI + '/new/' + context});
        };
        var addConfigItem = function(req, context) {
            console.log(req, context);
            return $http({method:'POST',url: SERVERAPI + '/' + context, data: req});
        }
        var saveConfigItem = function(req, context) {
            return $http({method:'PUT',url: SERVERAPI + '/' + context + '/' + req._id, data: req});
        }


        var addBucketToStream = function(stream, bucket) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/' + stream._id + '/add/bucket/' + bucket._id, data: bucket});
        }

        var addPhaseToStream = function(stream, phase) {
            console.log('save', stream, phase);
            return $http({method:'PUT',url: SERVERAPI + '/stream/' + stream._id + '/add/phase/' + phase._id, data: phase});
        }

        var addMilestoneToPhase = function(phase, milestone) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/phase/' + phase._id + '/add/milestone/' + milestone._id, data: milestone});
        }

        var addActivityToPhase = function(phase, activity) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/phase/' + phase._id + '/add/activity/' + activity._id, data: activity});
        }

        var addTaskToActivity = function(phase, task) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/activity/' + activity._id + '/add/task/' + task._id, data: task});
        }

        var addRequirementToTask = function(task, requirement) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/task/' + task._id + '/add/requirement/' + requirement._id, data: requirement});
        }

        var addRequirementToMilestone = function(milestone, requirement) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/milestone/' + milestone._id + '/add/stream/requirement/' + requirement._id, data: requirement});
        }

        var addRequirementToBucket= function(bucket, requirement) {
            return $http({method:'PUT',url: SERVERAPI + '/stream/bucket/' + bucket._id + '/add/stream/requirement/' + requirement._id, data: requirement});
        }


        return {
            getConfig: getConfig,
            getStreams: getStreams,

            getConfigItem: getConfigItem,
            newConfigItem: newConfigItem,
            addConfigItem: addConfigItem,
            saveConfigItem: saveConfigItem,

            addBucketToStream: addBucketToStream,
            addPhaseToStream: addPhaseToStream,
            addMilestoneToPhase: addMilestoneToPhase,
            addActivityToPhase: addActivityToPhase,
            addTaskToActivity: addTaskToActivity,
            addRequirementToTask: addRequirementToTask,
            addRequirementToMilestone: addRequirementToMilestone,
            addRequirementToBucket: addRequirementToBucket
		};
    }    
})();
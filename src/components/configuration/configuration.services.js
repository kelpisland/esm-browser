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
        var getStreams = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/stream'});
        };
    	var newStream = function(req) {
			return $http({method:'GET',url: SERVERAPI + '/new/stream'});
		};
        var addStream = function(req) {
            return $http({method:'POST',url: SERVERAPI + '/stream', data: req});
        }
        var saveStream = function(req) {
            return $http({method:'PUT',url: SERVERAPI + '/stream', data: req});
        }

        // New Sub Items
        var newActivity = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/activity'});
        };

        var newBucket = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/bucket'});
        };

        var newMilestone = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/milestone'});
        };

        var newPhase = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/phase'});
        };

        var newRequirement = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/requirement'});
        };

        var newTask = function(req) {
            return $http({method:'GET',url: SERVERAPI + '/new/task'});
        };

        return {
            getStreams: getStreams,
            newStream: newStream,
            addStream: addStream,
            saveStream: saveStream,
            
            newActivity: newActivity,
            newBucket: newBucket,
            newMilestone: newMilestone,
            newPhase: newPhase,
            newRequirement: newRequirement,
            newTask: newTask
		};
    }    
})();
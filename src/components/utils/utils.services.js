(function () {

    'use strict';

    angular.module('app.utils')
        .service('Utils', serviceUtils);
    // -----------------------------------------------------------------------------------
	//
	// Service: Util Services
	//
    // -----------------------------------------------------------------------------------
    serviceUtils.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceUtils($http, API) {
    	var getCurrentUser = function(req) {
			return $http({method:'GET',url: API + '/v1/currentuser'});
		};
    	var getRecentActivity = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/recentactivity'});
		};
    	var getQuickLinks = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/quicklinks'});
		};
		var getProjectStages = function(req) {
			return $http({method:'GET',url: API + '/v1/projectstages'});
		};
		var getCommonLayers = function(req) {
			return $http({method:'GET',url: API + '/v1/layers'});
		};
		return {
			getCurrentUser: getCurrentUser,
			getRecentActivity: getRecentActivity,
			getQuickLinks: getQuickLinks,
			getProjectStages: getProjectStages,
			getCommonLayers: getCommonLayers
		};
    }


})();
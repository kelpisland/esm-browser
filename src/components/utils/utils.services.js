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
			return $http({method:'GET',url: API + '/v1/currentUser'});
		};
    	var getRecentActivity = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/recentActivity'});
		};
    	var getQuickLinks = function(req) {
			return $http({method:'GET',url: API + '/v1/utils/quicklinks'});
		};
		var getProjectMilestones = function(req) {
			return $http({method:'GET',url: API + '/v1/projectMilestones'});
		};
		var getCommonLayers = function(req) {
			return $http({method:'GET',url: API + '/v1/layers'});
		};
    	var getResearchFocus = function(req) {
			return $http({method:'GET',url: API + '/v1/researchFocus'});
		};
    	var getResearchResults = function(req) {
			return $http({method:'GET',url: API + '/v1/research/' + req.term });
		};
		var getProjectResearchDetail = function(req) {
			return $http({method:'GET',url: API + '/v1/researchDetail/' + req.seed + '/' + req.term });		
		}
		var getRoles = function(req) {
			return $http({method:'GET',url: API + '/v1/roles' });		
		}
		return {
			getCurrentUser: getCurrentUser,
			getRecentActivity: getRecentActivity,
			getQuickLinks: getQuickLinks,
			getProjectMilestones: getProjectMilestones,
			getCommonLayers: getCommonLayers,
			getResearchFocus: getResearchFocus,
			getResearchResults: getResearchResults,
			getProjectResearchDetail: getProjectResearchDetail,
			getRoles: getRoles
		};
    }


})();
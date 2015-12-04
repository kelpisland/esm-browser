(function () {

    'use strict';

    angular.module('app.tasks')
        .service('ValueComponents', serviceTaskValueComponentss);
    // -----------------------------------------------------------------------------------
	//
	// SERVICE: ValueComponents templates
	//
    // -----------------------------------------------------------------------------------
    serviceTaskValueComponentss.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceTaskValueComponentss($http, API) {
		// var getNew = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/ValueComponentsNew'});
		// };
		// var getTemplates = function(req) {
		// 	return $http({method:'GET',url: API + '/v1/ValueComponentsTemplates'});
		// };
		return {
			// getNew: getNew,
			// getTemplates: getTemplates
		};
    }

})();
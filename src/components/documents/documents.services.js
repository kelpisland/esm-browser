(function () {

    'use strict';

    angular.module('app.project')
        .service('Document', serviceDocument);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    serviceDocument.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceDocument($http, API) {

    	var getDocumentTypes = function(req) {
			return $http({method:'GET',url: API + '/v1/documentTypes/'});
		};

		return {
			getDocumentTypes: getDocumentTypes
		};
    }

})();
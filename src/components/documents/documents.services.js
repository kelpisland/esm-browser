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

    	var getDocumentTypes = function() {
			return [
                {
                    "code":"intakeoverview",
                    "name":"Project Overview",
                    "bucket":"intake"
                },
                {
                    "code":"intakeshape",
                    "name":"Shape File",
                    "bucket":"intake"
                },
                {
                    "code":"intakemisc",
                    "name":"Supporting File",
                    "bucket":"intake"
                }
            ];
		};

		return {
			getDocumentTypes: getDocumentTypes
		};
    }

})();
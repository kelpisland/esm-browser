(function () {

    'use strict';

    angular.module('app.tasks')
        .service('Notifications', serviceNotifications);
    // -----------------------------------------------------------------------------------
	//
	// SERVICE: Notification templates
	//
    // -----------------------------------------------------------------------------------
    serviceNotifications.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceNotifications($http, API) {
		var getTemplates = function(req) {
			return $http({method:'GET',url: API + '/v1/notificationTemplates'});
		};

		return {
			getTemplates: getTemplates
		};
    }

})();
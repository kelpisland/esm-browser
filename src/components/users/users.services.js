(function () {
    'use strict';

    angular
        .module('app.users')
			.service('Users', serviceUser);

    // ----- directiveFunction -----
    serviceUser.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceUser($http, API) {
		var getUser = function(req) {
			return $http({method:'GET',url: API + '/v1/user/' + req.id});
		};
		var getQuicklinks = function(req) {
			return $http({method:'GET',url: API + '/v1/userQuicklinks'});
		};

		return {
			getUser: getUser,
			getQuicklinks: getQuicklinks
		};
    }


})();

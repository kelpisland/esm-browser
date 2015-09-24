(function () {
    'use strict';

    angular
        .module('app.users')
			.service('serviceUser', serviceUser);

    // ----- directiveFunction -----
    serviceUser.$inject = ['$http', 'API'];
    /* @ngInject */
    function serviceUser($http, API) {
		var getUser = function(req) {
			return $http({method:'GET',url: API + '/v1/user/' + req.id});
		};
		return {
			getUser: getUser
		};
    }


})();

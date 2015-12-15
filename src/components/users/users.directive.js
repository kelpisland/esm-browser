(function () {
    'use strict';

    angular
        .module('app.users')
		.directive('tmplQuicklinksThumbnails', directiveQuicklinksThumbnails)
		.directive('tmplCompany', directiveCompany)
		.directive('tmplUser', directiveUser);
	// ----- directiveFunction -----
	directiveQuicklinksThumbnails.$inject = [];
	directiveCompany.$inject = [];
	directiveUser.$inject = [];

	/* @ngInject */
	function directiveQuicklinksThumbnails() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/users/partials/user-quicklinks.html',
			controller: 'controllerUsersQuicklinks',
			controllerAs: 'uql'
		};

		return directive;
	}

	function directiveCompany() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/users/partials/user-company.html',
			controller: 'controllerUsersCompany',
			controllerAs: 'uco',
			scope: {
				project: '@',
				company: '@',
				user: '@'
			}
		}

		return directive;
	}

	function directiveUser() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/users/partials/user-user.html',
			controller: 'controllerUsersUser',
			controllerAs: 'uu',
			scope: {
				project: '@',
				company: '@',
				user: '@'
			}
		}

		return directive;
	}

})();

(function () {
    'use strict';

    angular
        .module('app.users')
		.directive('tmplQuicklinksThumbnails', directiveQuicklinksThumbnails)
		.directive('tmplCompany', directiveCompany);
	// ----- directiveFunction -----
	directiveQuicklinksThumbnails.$inject = [];
	directiveCompany.$inject = [];

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
				company: '=',
				user: '='
			}
		}

		return directive;
	}

})();

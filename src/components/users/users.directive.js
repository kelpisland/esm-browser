(function () {
    'use strict';

    angular
        .module('app.users')
		.directive('tmplQuicklinksThumbnails', directiveQuicklinksThumbnails)
		.directive('tmplCompanyEntryForm', directiveCompanyEntryForm)
		.directive('tmplUserEntryForm', directiveUserEntryForm);
	// -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Project Schedule
	//
    // -----------------------------------------------------------------------------------
	directiveQuicklinksThumbnails.$inject = [];
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
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Company Entry Form
	//
    // -----------------------------------------------------------------------------------
	directiveCompanyEntryForm.$inject = [];
    /* @ngInject */
	function directiveCompanyEntryForm() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/users/partials/user-company.html',
			controller: 'controllerCompanyEntryForm',
			controllerAs: 'uco',
			scope: {
				project: '=',
				company: '=',
				user: '='
			}
		}

		return directive;
	}
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: User Entry Form
	//
    // -----------------------------------------------------------------------------------
	directiveUserEntryForm.$inject = [];
    /* @ngInject */
	function directiveUserEntryForm() {
		
		var directive = {
			restrict: 'E',
			templateUrl: 'components/users/partials/user-user.html',
			controller: 'controllerUserEntryForm',
			controllerAs: 'uu',
			scope: {
				project: '=',
				company: '=',
				user: '='
			}
		}
		return directive;
	}

})();

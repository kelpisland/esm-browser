(function () {
    'use strict';

    angular
        .module('app.users')
		.directive('tmplQuicklinksThumbnails', directiveQuicklinksThumbnails);
	// ----- directiveFunction -----
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

})();

(function () {

    'use strict';

    angular.module('app.users')
		// General
        .controller('controllerUsersQuicklinks', controllerUsersQuicklinks);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: user Quicklinks
	//
    // -----------------------------------------------------------------------------------
    controllerUsersQuicklinks.$inject = ['Users'];
    /* @ngInject */
    function controllerUsersQuicklinks(Users) {
		var uql = this;

		Users.getQuicklinks().then( function(res) {
			uql.quicklinks = res.data;
		});

    }

    function controllerUsersCompany($scope) {
        var uco = this;
    }
 
})();

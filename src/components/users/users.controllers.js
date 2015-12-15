(function () {

    'use strict';

    angular.module('app.users')
		// General
        .controller('controllerUsersQuicklinks', controllerUsersQuicklinks)
        .controller('controllerCompanyEntryForm', controllerCompanyEntryForm)
        .controller('controllerUserEntryForm', controllerUserEntryForm);        


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
    // -----------------------------------------------------------------------------------
    //
    // CONTROLLER: company entry form
    //
    // -----------------------------------------------------------------------------------
    controllerCompanyEntryForm.$inject = ['$scope'];
    /* @ngInject */
    function controllerCompanyEntryForm($scope) {
        var uco = this;

        $scope.$watch('project', function(newValue) {
            if (newValue) {
                uco.project = newValue;
            }
        });

    }
    // -----------------------------------------------------------------------------------
    //
    // CONTROLLER: user entry form
    //
    // -----------------------------------------------------------------------------------
    controllerUserEntryForm.$inject = ['$scope'];
    /* @ngInject */
    function controllerUserEntryForm($scope) {
        var uu = this;

        $scope.$watch('project', function(newValue) {
            if (newValue) {
                uu.project = newValue;
            }
        });

    }
 
})();

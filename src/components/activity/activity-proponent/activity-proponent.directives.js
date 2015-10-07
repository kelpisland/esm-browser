(function () {

    'use strict';

    angular.module('app.activity')
        .directive('tmplProponentActivity', directiveProponentActivity)
        .directive('tmplProponentActivityDetail', directiveProponentActivityDetail);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Proponent
	//
    // -----------------------------------------------------------------------------------
    directiveProponentActivity.$inject = [];
    /* @ngInject */
    function directiveProponentActivity() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-proponent/activity-proponent.html',
            controller: 'controllerProponentActivity',
            controllerAs: 'actBase'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Detail
	//
    // -----------------------------------------------------------------------------------
    directiveProponentActivityDetail.$inject = [];
    /* @ngInject */
    function directiveProponentActivityDetail() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-proponent/partials/activity-proponent-detail.html',
            controller: 'controllerProponentActivityDetail',
            controllerAs: 'actDetail',
			scope : {
             	detail: '='
			}
        };
        return directive;
    }
})();
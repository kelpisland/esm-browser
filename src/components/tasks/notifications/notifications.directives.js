(function () {

    'use strict';

    angular.module('app.tasks')
		.directive('tmplNotifications',  directiveTaskNotifications);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Task, simple complete
	//
    // -----------------------------------------------------------------------------------
    directiveTaskNotifications.$inject = [];
    /* @ngInject */
    function directiveTaskNotifications() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/tasks/notifications/notifications.html',
            controller: 'controllerTaskNotifications',
            controllerAs: 'taskNotifications',
            scope: {
            	anchor: '@',
            	item: '='
            }
        };
        return directive;
    }

})();
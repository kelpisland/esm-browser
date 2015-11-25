(function () {

    'use strict';

    angular.module('app.tasks')
        .run( configTaskNotifications )
		.directive('tmplNotifications',  directiveTaskNotifications);
    // -----------------------------------------------------------------------------------
    //
    // Config: register this task with the UI
    //
    // -----------------------------------------------------------------------------------
    configTaskNotifications.$inject = ['ProcessCodes'];
    /* @ngInject */
    function configTaskNotifications(ProcessCodes) {
        ProcessCodes.push('Notifications');
    }
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
            	task: '=',
                project: '='
            }
        };
        return directive;
    }

})();
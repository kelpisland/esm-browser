(function () {

    'use strict';

    angular.module('app.tasks')
        .run( configTaskManageIssues )
		.directive('tmplManageIssues',  directiveTaskManageIssues);
    // -----------------------------------------------------------------------------------
    //
    // Config: register this task with the UI
    //
    // -----------------------------------------------------------------------------------
    configTaskManageIssues.$inject = ['ProcessCodes'];
    /* @ngInject */
    function configTaskManageIssues(ProcessCodes) {
        ProcessCodes.push('Manage Issues');
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Task, simple complete
	//
    // -----------------------------------------------------------------------------------
    directiveTaskManageIssues.$inject = [];
    /* @ngInject */
    function directiveTaskManageIssues() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/tasks/manage-issues/manage-issues.html',
            controller: 'controllerTaskManageIssues',
            controllerAs: 'taskManageIssues',
            scope: {
            	anchor: '@',
            	task: '=',
                project: '='
            }
        };
        return directive;
    }

})();
(function () {

    'use strict';

    angular.module('app.tasks')
		.directive('tmplConfirmNoComment',  directiveTaskConfirmNoComment);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Task, simple complete
	//
    // -----------------------------------------------------------------------------------
    directiveTaskConfirmNoComment.$inject = [];
    /* @ngInject */
    function directiveTaskConfirmNoComment() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/tasks/confirm-no-comment/confirm-no-comment.html',
            controller: 'controllerTaskConfirmNoComment',
            controllerAs: 'taskCnc',
            scope: {
            	anchor: '@',
            	item: '@'
            }
        };
        return directive;
    }

})();
(function () {

    'use strict';

    angular.module('app.tasks')
		.directive('tmplCommentPeriodScheduling',  directiveTaskCommentPeriodScheduling);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Task, simple complete
	//
    // -----------------------------------------------------------------------------------
    directiveTaskCommentPeriodScheduling.$inject = [];
    /* @ngInject */
    function directiveTaskCommentPeriodScheduling() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/tasks/confirm-no-comment/confirm-no-comment.html',
            controller: 'controllerTaskCommentPeriodScheduling',
            controllerAs: 'taskCnc',
            scope: {
            	anchor: '@',
            	item: '='
            },
            link: function(scope, element, attrs) {
                console.log('in item', scope.item);
            }
        };
        return directive;
    }

})();
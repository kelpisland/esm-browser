(function () {

    'use strict';

    angular.module('app.tasks')
        .run( configTaskPublicCommentClassificationProponent )
		.directive('tmplPublicCommentClassificationProponent',  directiveTaskPublicCommentClassificationProponent);
    // -----------------------------------------------------------------------------------
    //
    // Config: register this task with the UI
    //
    // -----------------------------------------------------------------------------------
    configTaskPublicCommentClassificationProponent.$inject = ['ProcessCodes'];
    /* @ngInject */
    function configTaskPublicCommentClassificationProponent(ProcessCodes) {
        ProcessCodes.push('Public Comment Classification Proponent');
    }        
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Task, simple complete
	//
    // -----------------------------------------------------------------------------------
    directiveTaskPublicCommentClassificationProponent.$inject = [];
    /* @ngInject */
    function directiveTaskPublicCommentClassificationProponent() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/tasks/public-comment-classification-proponent/public-comment-classification-proponent.html',
            controller: 'controllerTaskPublicCommentClassificationProponent',
            controllerAs: 'taskPubComClassProp',
            scope: {
            	anchor: '@',
            	task: '=',
                project: '='                
            }
        };
        return directive;
    }

})();
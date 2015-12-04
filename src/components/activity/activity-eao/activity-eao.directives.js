(function () {

    'use strict';

    angular.module('app.activity')
        .directive('tmplEaoActivity', directiveEAOActivity)
        .directive('tmplEaoActivityDetail', directiveEAOActivityDetail)
		.directive('tmplEaoActivityTasks', directiveEAOActivityTasks)       
		.directive('tmplEaoActivityProcesses', directiveEAOActivityProcesses)
        .directive('modalAddCustomTask', directiveModalAddCustomTask);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity EAO
	//
    // -----------------------------------------------------------------------------------
    directiveEAOActivity.$inject = [];
    /* @ngInject */
    function directiveEAOActivity() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-eao/activity-eao.html',
            controller: 'controllerEAOActivity',
            controllerAs: 'actBase'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: EAO Activity Detail
	//
    // -----------------------------------------------------------------------------------
    directiveEAOActivityDetail.$inject = [];
    /* @ngInject */
    function directiveEAOActivityDetail() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-eao/partials/activity-eao-detail.html',
            controller: 'controllerEAOActivityDetail',
            controllerAs: 'actDetail',
			scope : {
             	project: '=',
                activity: '='
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: EAO Activity Tasks
	//
    // -----------------------------------------------------------------------------------
    directiveEAOActivityTasks.$inject = [];
    /* @ngInject */
    function directiveEAOActivityTasks() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-eao/partials/activity-eao-tasks.html',
            controller: 'controllerEAOActivityTasks',
            controllerAs: 'actTasks',
			scope : {
             	project: '=',
                activity: '=',
                tasks: '=',
                task: '='
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: EAO Activity Processes
	//
    // -----------------------------------------------------------------------------------
    directiveEAOActivityProcesses.$inject = [];
    /* @ngInject */
    function directiveEAOActivityProcesses() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/activity-eao/partials/activity-eao-processes.html',
            controller: 'controllerEAOActivityProcesses',
            controllerAs: 'actProcs',
			scope : {
             	project: '=',
                activity: '=',
                tasks: '=' ,
                task: '='              
			}
        };
        return directive;
    }

    // -----------------------------------------------------------------------------------
    //
    // DIRECTIVE: Add Custom Task to Activity
    //
    // -----------------------------------------------------------------------------------
    directiveModalAddCustomTask.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalAddCustomTask($modal) {
        var directive = {
            restrict:'A',
            scope : {
                project: '='
            },
            link : function(scope, element, attrs) {
                element.on('click', function() {
                    var modalCustomTask = $modal.open({
                        animation: true,
                        templateUrl: 'components/activity/partials/modal-add-custom-task.html',
                        controller: 'controllerModalAddCustomTask',
                        controllerAs: 'customTask',
                        resolve: {
                            rProject: function () {
                                return scope.project;
                            }
                        },
                        size: 'lg'
                    });
                    modalCustomTask.result.then(function () {}, function () {});
                });
            }
        };
        return directive;
    }

})();
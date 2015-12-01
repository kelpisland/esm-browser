(function () {

    'use strict';

    angular.module('app.activity')
        .directive('tmplEaoActivity', directiveEAOActivity)
        .directive('tmplEaoActivityDetail', directiveEAOActivityDetail)
		.directive('tmplEaoActivityTasks', directiveEAOActivityTasks)       
		.directive('tmplEaoActivityProcesses', directiveEAOActivityProcesses);        
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
})();
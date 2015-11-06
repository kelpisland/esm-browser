(function () {

    'use strict';

    angular.module('app.projects')
        .directive('tmplProjectsList', directiveProjectsList)
        .directive('tmplProjectsPanels', directiveProjectsPanels)        
        .directive('tmplProjectsMap', directiveProjectsMap)
        .directive('tmplProjectsFilterBar', directiveProjectsFilterBar);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects List
	//
    // -----------------------------------------------------------------------------------
    directiveProjectsList.$inject = [];
    /* @ngInject */
    function directiveProjectsList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/partials/projects-list.html',
			controller: 'controllerProjectsList',
			controllerAs: 'projectList',
            scope: {
            	projects: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Panels
	//
    // -----------------------------------------------------------------------------------
    directiveProjectsPanels.$inject = [];
    /* @ngInject */
    function directiveProjectsPanels() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/partials/projects-panels.html',
			controller: 'controllerProjectsList',
			controllerAs: 'pl',
            scope: {
            	projects: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Map
	//
    // -----------------------------------------------------------------------------------
    directiveProjectsMap.$inject = [];
    /* @ngInject */
    function directiveProjectsMap() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/partials/projects-map.html',
			controller: 'controllerProjectsList',
			controllerAs: 'pl',
            scope: {
            	projects: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Filter Bar
	//
    // -----------------------------------------------------------------------------------
    directiveProjectsFilterBar.$inject = [];
    /* @ngInject */
    function directiveProjectsFilterBar() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
            	filter: '='
            },
            templateUrl: 'components/projects/partials/projects-filter-bar.html',
            controller: 'controllerProjectsFilterBar',
            controllerAs: 'fbc',
            link: function (scope, element, attrs) {
				scope.filter.filterKeyword = '';
				scope.filter.filterObject = {};
				if (!scope.filter.view) {
					scope.filter.view = 'list';
				}
            }
        };
        return directive;
    }
})();

(function () {

    'use strict';

    angular.module('app.projects')
    	// Public
        .directive('tmplPublicProjects', directivePublicProjects)
		// Proponent
		.directive('tmplProponentProjects', directiveProponentProjects)
		// General
        .directive('tmplProjectsList', directiveProjectsList)
        .directive('tmplProjectsPanels', directiveProjectsPanels)        
        .directive('tmplProjectsMap', directiveProjectsMap)
        .directive('tmplProjectsFilterBar', directiveProjectsFilterBar)

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Public Projects Main
	//
    // -----------------------------------------------------------------------------------
    directivePublicProjects.$inject = [];
    /* @ngInject */
    function directivePublicProjects() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/public-projects.html',
            controller: 'controllerPublicProjects',
            controllerAs: 'vm'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Proponent Projects Main
	//
    // -----------------------------------------------------------------------------------
    directiveProponentProjects.$inject = [];
    /* @ngInject */
    function directiveProponentProjects() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/projects/proponent-projects.html',
            controller: 'controllerProponentProjects',
            controllerAs: 'vm'
        };
        return directive;
    }    
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
            templateUrl: 'components/projects/partials/projects-list.html'
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
            templateUrl: 'components/projects/partials/projects-panels.html'
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
            templateUrl: 'components/projects/partials/projects-map.html'
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

(function () {

    'use strict';

    angular.module('app.project')
        .directive('modalProjectSchedule', directiveModalProjectSchedule)
        .directive('tmplProjectTombstoneHorizontal', directiveProjectTombstoneHorizontal)
        .directive('tmplProjectTombstoneVertical', directiveProjectTombstoneVertical)
        .directive('tmplProjectTimeline', directiveProjectTimeline)
        .directive('tmplProjectEntryTombstoneHorizontal', directiveProjectEntryTombstone)
        .directive('tmplProjectBucketListing', directiveProjectBucketListing)
        .directive('tmplProjectResearch', directiveProjectResearch);
       
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Project Schedule
	//
    // -----------------------------------------------------------------------------------
    directiveModalProjectSchedule.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalProjectSchedule($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	project: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/project/partials/modal-project-schedule.html',
						controller: 'modalProjectSchedule',
						controllerAs: 'ps',
						resolve: {
							rProject: function () {
								return scope.project;
							}
						},
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Project Tombstone Horizontal - same controller as the vertical view
	//
    // -----------------------------------------------------------------------------------
    directiveProjectTombstoneHorizontal.$inject = [];
    /* @ngInject */
    function directiveProjectTombstoneHorizontal() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-tombstone-horizontal.html',
            controller: 'controllerProjectTombstone',
            controllerAs: 'projTomb',
            scope: {
            	project: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Project Tombstone Vertical - same controller as the horizontal view
	//
    // -----------------------------------------------------------------------------------
    directiveProjectTombstoneVertical.$inject = [];
    /* @ngInject */
    function directiveProjectTombstoneVertical() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-tombstone-vertical.html',
            controller: 'controllerProjectTombstone',
            controllerAs: 'projTomb',
            scope: {
            	project: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
    //
    // DIRECTIVE: Project Timeline Horizontal
    //
    // -----------------------------------------------------------------------------------
    directiveProjectTimeline.$inject = [];
    /* @ngInject */
    function directiveProjectTimeline() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-timeline.html',
            controller: 'controllerProjectTimeline',
            controllerAs: 'ptime',
            scope: {
                project: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Project Entry Tombstone - just insert the template
	//
    // -----------------------------------------------------------------------------------
    directiveProjectEntryTombstone.$inject = [];
    /* @ngInject */
    function directiveProjectEntryTombstone() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-entry-tombstone.html',
            controller: 'controllerProjectEntryTombstone',
            controllerAs: 'pets'            
        };
        return directive;
    }

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Project bucket listing
	//
    // -----------------------------------------------------------------------------------
    directiveProjectBucketListing.$inject = [];
    /* @ngInject */
    function directiveProjectBucketListing() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-bucket-listing.html',
            controller: 'controllerProjectBucketListing',
            controllerAs: 'pbl',
            scope: {
            	project: '=',
            	filter: '='
            }
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Project bucket listing
	//
    // -----------------------------------------------------------------------------------
    directiveProjectResearch.$inject = [];
    /* @ngInject */
    function directiveProjectResearch() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/project/partials/project-research.html',
            controller: 'controllerProjectResearch',
            controllerAs: 'pr',
            scope: {
            	project: '='
            }
        };
        return directive;
    }

})();
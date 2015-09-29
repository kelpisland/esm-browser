(function () {

    'use strict';

    angular.module('app.activity')
        .directive('tmplActivityListing', directiveActivityListing)
        .directive('tmplActivityItem', directiveActivityItem)
        .directive('tmplActivityDetail', directiveActivityDetail)
        .directive('tmplProponentActivity', directiveProponentActivity)   
		.directive('modalResponseRevisions', directiveModalResponseRevisions);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Listing
	//
    // -----------------------------------------------------------------------------------
    directiveActivityListing.$inject = [];
    /* @ngInject */
    function directiveActivityListing() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/partials/activity-list.html',
            controller: 'controllerActivityList',
            controllerAs: 'al',
			scope : {
             	project: '='
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Listing
	//
    // -----------------------------------------------------------------------------------
    directiveActivityItem.$inject = [];
    /* @ngInject */
    function directiveActivityItem() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/partials/activity-item.html',
            controller: 'controllerActivityItem',
            controllerAs: 'ai',
			scope : {
             	activity: '='
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Detail
	//
    // -----------------------------------------------------------------------------------
    directiveActivityDetail.$inject = [];
    /* @ngInject */
    function directiveActivityDetail() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/partials/activity-detail.html',
            controller: 'controllerActivityDetail',
            controllerAs: 'ad',
			scope : {
             	detail: '='
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Activity Proponent
	//
    // -----------------------------------------------------------------------------------
    directiveProponentActivity.$inject = [];
    /* @ngInject */
    function directiveProponentActivity() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/activity/proponent-activity.html',
            controller: 'controllerActivityProponent',
            controllerAs: 'ap'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal Response Revisions
	//
    // -----------------------------------------------------------------------------------
    directiveModalResponseRevisions.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalResponseRevisions($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	activityId: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/activity/partials/modal-response-revisions.html',
						controller: 'controllerModalResponseRevisions',
						controllerAs: 'resRev',
						resolve: {
							rActivityId: function () {
								return scope.activityId;
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

})();
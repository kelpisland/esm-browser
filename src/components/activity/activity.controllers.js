(function () {

    'use strict';

    angular.module('app.activity')
		.controller('controllerActivityList', controllerActivityList)
		.controller('controllerActivityItem', controllerActivityItem)
		
		// General
//         .controller('ModalAddPublicComment', controllerModalAddComment)
//         .controller('ModalDocumentViewer', controllerModalDocumentViewer)
//         .controller('ModalProponentAccess', controllerModalProponentAccess)
//         .controller('ModalProjectSchedule', controllerModalProjectSchedule);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity List
	//
    // -----------------------------------------------------------------------------------
    controllerActivityList.$inject = ['$scope', 'logger', '$modal', 'Activity', '$stateParams', '$rootScope'];
	//
	function controllerActivityList($scope, logger, $modal, Activity, $stateParams, $rootScope) {
		var al = this;

		al.panelSort = [
			{'field': 'name', 'name':'Title'},
			{'field': 'status', 'name':'Status'},
			{'field': 'requirement', 'name':'Requires'},
			{'field': 'updatedDate', 'name':'Date Updated'},
			{'field': 'createDate', 'name':'Date Created'},			
		];

		//
		// Get Project
		Activity.getProjectActivities({id: $scope.projectId}).then(function(res) {
			al.activities = res.data;
		});

    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity Item
	//
    // -----------------------------------------------------------------------------------
    controllerActivityItem.$inject = ['$scope'];
	//
	function controllerActivityItem($scope) {
		var al = this;
		al.activity = $scope.activity;
    }	
})();
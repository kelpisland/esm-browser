(function () {

    'use strict';

    angular.module('app.activity')
		.controller('controllerActivityList', controllerActivityList)
		.controller('controllerActivityItem', controllerActivityItem)
		.controller('controllerActivityDetail', controllerActivityDetail)
		.controller('controllerActivityProponent', controllerActivityProponent);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity List
	//
    // -----------------------------------------------------------------------------------
    controllerActivityList.$inject = ['$scope', 'logger', '$modal', 'Activity', '$stateParams'];
	//
	function controllerActivityList($scope, logger, $modal, Activity, $stateParams) {
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
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity Detail
	//
    // -----------------------------------------------------------------------------------
    controllerActivityDetail.$inject = ['$scope'];
	//
	function controllerActivityDetail($scope ) {
		var ad = this;
		
		$scope.$watch('detail', function(newValue) {	
			ad.activity = angular.copy($scope.detail);		
		});
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity Proponent
	//
    // -----------------------------------------------------------------------------------
    controllerActivityProponent.$inject = ['$scope', 'logger', '$modal', 'Activity', 'Project', '$stateParams'];
	//
	function controllerActivityProponent($scope, logger, $modal, Activity, Project, $stateParams) {
		var ap = this;
		//
		// Get Activity
		Activity.getProjectActivity({id: $stateParams.id}).then(function(res) {
			ap.activity = res.data;

			//
			// Get Project
			Project.getProject({id: res.data.projectId}).then(function(res) {
				ap.project = res.data;
			});			

			
		});

    }    
})();
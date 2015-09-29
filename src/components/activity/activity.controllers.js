(function () {

    'use strict';

    angular.module('app.activity')
		.controller('controllerActivityList', controllerActivityList)
		.controller('controllerActivityItem', controllerActivityItem)
		.controller('controllerActivityDetail', controllerActivityDetail)
		.controller('controllerActivityProponent', controllerActivityProponent)
		.controller('controllerModalResponseRevisions', controllerModalResponseRevisions);		
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
		
		ad.comments = [
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'}			
		];
		
		ad.toggleDocumentFilter = function(idx) {
			if (ad.filteredDocumentsFor === undefined || ad.filteredDocumentsFor !== idx) {
				ad.filterDocumentsBy = 'resp1235';
				ad.filteredDocumentsFor = idx;
			} else {
				ad.filterDocumentsBy = '';
				ad.filteredDocumentsFor = undefined;
			}
		}
		
		$scope.$watch('detail', function(newValue) {	
			ad.activity = angular.copy(newValue);
			console.log(newValue);
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
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal Response Revisions
	//
    // -----------------------------------------------------------------------------------
    controllerModalResponseRevisions.$inject = ['Activity', 'rActivityId', '$modalInstance'];
	//
	function controllerModalResponseRevisions(Activity, rActivityId, $modalInstance) {
		var resRev = this;
		
		Activity.getResponseRevisions({id: rActivityId}).then(function(res) {
			console.log(res.data);
			resRev.responses = res.data;
		});
		
		
		resRev.ok = function () { $modalInstance.close(); };
		resRev.cancel = function () { $modalInstance.dismiss('cancel'); };
		
    }    
    
    
    
})();
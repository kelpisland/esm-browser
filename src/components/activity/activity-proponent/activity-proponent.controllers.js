(function () {

    'use strict';

    angular.module('app.activity')
		.controller('controllerProponentActivity', controllerProponentActivity)
		.controller('controllerProponentActivityDetail', controllerProponentActivityDetail);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity Proponent
	//
    // -----------------------------------------------------------------------------------
    controllerProponentActivity.$inject = ['$scope', 'logger', '$modal', 'Activity', 'Project', '$stateParams'];
	//
	function controllerProponentActivity($scope, logger, $modal, Activity, Project, $stateParams) {
		var actBase = this;
		//
		// Get Activity
		Activity.getProjectActivity({id: $stateParams.id}).then(function(res) {
			actBase.activity = res.data;
			//
			// Get Project
			Project.getProject({id: res.data.projectId}).then(function(res) {
				actBase.project = res.data;
			});			
		});
    }    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity Detail - NOT USED RIGHT NOW
	//
    // -----------------------------------------------------------------------------------
    controllerProponentActivityDetail.$inject = ['$scope'];
	//
	function controllerProponentActivityDetail($scope ) {
		var actDetail = this;
		
		actDetail.comments = [
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'}			
		];
		
		actDetail.toggleDocumentFilter = function(idx) {
			if (actDetail.filteredDocumentsFor === undefined || actDetail.filteredDocumentsFor !== idx) {
				actDetail.filterDocumentsBy = 'resp1235';
				actDetail.filteredDocumentsFor = idx;
			} else {
				actDetail.filterDocumentsBy = '';
				actDetail.filteredDocumentsFor = undefined;
			}
		}
		
		$scope.$watch('detail', function(newValue) {	
			actDetail.activity = angular.copy(newValue);
		});
    }
})();

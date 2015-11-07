(function () {

    'use strict';

    angular.module('app.project')
		// General
        .controller('modalProjectSchedule', controllerModalProjectSchedule)
        .controller('controllerProjectTombstone', controllerProjectTombstone)
        .controller('controllerProjectTimeline', controllerProjectTimeline)        
        .controller('controllerProjectEntryTombstone', controllerProjectEntryTombstone)
        .controller('controllerProjectBucketListing', controllerProjectBucketListing)
		.controller('controllerProjectResearch', controllerProjectResearch);
		
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Project Schedule
	//
    // -----------------------------------------------------------------------------------
    controllerModalProjectSchedule.$inject = ['$modalInstance', 'rProject'];
    //
    function controllerModalProjectSchedule($modalInstance, rProject) { 
		var ps = this;
		
		ps.project = rProject;

		ps.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Tombstone
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectTombstone.$inject = ['$scope'];
	//
	function controllerProjectTombstone($scope) {
		var projTomb = this;
		
		$scope.$watch('project', function(newValue) {
			projTomb.project = newValue;		
		});
    }    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Timeline
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectTimeline.$inject = ['$scope'];
	//
	function controllerProjectTimeline($scope) {
		var ptime = this;
		
		$scope.$watch('project', function(newValue) {
			ptime.project = newValue;		
		});
    }    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Entry Tombstone
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectEntryTombstone.$inject = ['$scope', 'Projects'];
	//
	function controllerProjectEntryTombstone($scope, Projects) {
		var projectEntryTS = this;
		
		$scope.$watch('project', function(newValue){
			projectEntryTS.project = newValue; 	
		});
		
		Projects.getProjectTypes().then( function(res) {
			projectEntryTS.types = res.data;
		});
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Bucket Listing
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectBucketListing.$inject = ['$scope', 'Project', '$filter'];
	//
	function controllerProjectBucketListing($scope, Project, $filter) {
		var projBuckets = this;

		projBuckets.panelSort = [
			{'field': 'name', 'name':'Name'},
			{'field': 'type', 'name':'Type'},
			{'field': 'progress', 'name':'Complete'}
		];

		$scope.$watch('filter', function(newValue) {
			// wait for project and get related buckets
			if (newValue === 'inprogress') {
				projBuckets.bucketsFiltered = $filter('projectBucketNotComplete')(projBuckets.buckets);
			} else {
				projBuckets.bucketsFiltered = projBuckets.buckets;
			}
		});



		$scope.$watch('project', function(newValue) {
			// wait for project and get related buckets
			projBuckets.buckets = newValue.buckets;
			console.log(newValue);
			projBuckets.bucketsFiltered = $filter('projectBucketNotComplete')(newValue.buckets);
		});


    }              	
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Research
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectResearch.$inject = ['$scope', 'Project', 'Utils'];
	//
	function controllerProjectResearch($scope, Project, Utils) {
		var pr = this;
		pr.searchResults = {};
		
		pr.workSpaceLayers = [];
		
		pr.panelSort = [
			{'field': 'name', 'name':'Name'},
			{'field': 'type', 'name':'Type'},
			{'field': 'progress', 'name':'Complete'}
		];

		Utils.getCommonLayers().then( function(res) {
			pr.sharedLayers = res.data;
		});

		Utils.getResearchFocus().then( function(res) {
			pr.researchFocus = res.data;
		});

		pr.performSearch = function() {
			Utils.getResearchResults({'term': pr.search.focus}).then( function(res) {
				pr.searchResults.records = res.data;
				pr.searchResults.terms = pr.search.focus;
			});
		};

		$scope.$watch('project', function(newValue) {
			// wait for project and get related buckets
			Project.getProjectBuckets(newValue).then( function(res) {
				pr.buckets = res.data;
			});

			Project.getProjectLayers(newValue).then( function(res) {
				pr.projectLayers = res.data;
				pr.workSpaceLayers.push({"name":"Project", "layers": res.data});
			});
			
			Project.getProjectTags(newValue).then( function(res) {
				pr.projectTags = res.data;
			});			

			Project.getProjectResearch(newValue).then( function(res) {
				pr.projectResearch = res.data;
			});		

			Project.getProjectRelatedResearch(newValue).then( function(res) {
				pr.projectRelatedResearch = res.data;
			});		

		});


    }              	

})();
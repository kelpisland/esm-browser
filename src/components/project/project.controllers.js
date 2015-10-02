(function () {

    'use strict';

    angular.module('app.project')
		// General
        .controller('modalProjectSchedule', controllerModalProjectSchedule)
        .controller('controllerProjectTombstone', controllerProjectTombstone)
        .controller('controllerProjectEntryTombstone', controllerProjectEntryTombstone);
    
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
		var pts = this;
		
		$scope.$watch('project', function(newValue) {
			pts.project = newValue;		
		});
    }    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Entry Tombstone
	//
    // -----------------------------------------------------------------------------------    
    controllerProjectEntryTombstone.$inject = ['logger', 'Projects'];
	//
	function controllerProjectEntryTombstone(logger, Projects) {
		var pets = this;
		
		pets.project = {contact:{}};  // TODO: Replace this with a blank model pulled from the database.
		
		Projects.getProjectTypes().then( function(res) {
			pets.types = res.data;
		});
    }     	
})();
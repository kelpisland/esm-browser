(function () {

    'use strict';

    angular.module('app.project')
    	// Public
        .controller('controllerPublicProject', controllerPublicProject)

		// Proponent
		.controller('controllerProponentProject', controllerProponentProject)
		
		// General
        .controller('ModalAddPublicComment', controllerModalAddComment)
        .controller('ModalDocumentViewer', controllerModalDocumentViewer)
        .controller('ModalProponentAccess', controllerModalProponentAccess)
        .controller('ModalProjectSchedule', controllerModalProjectSchedule);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Public Project Detail
	//
    // -----------------------------------------------------------------------------------
    controllerPublicProject.$inject = ['logger', '$modal', 'Project', '$stateParams'];
	//
	function controllerPublicProject(logger, $modal, Project, $stateParams) {
		var vm = this;
		
		vm.closedConcerns = function(concerns) {
			var count = 0;
			angular.forEach(concerns, function(item, idx) {
				if (item.status === 'Closed') {
					count++;
				}
			});
			return count;
		};
			

		vm.openConcerns = function(concerns) {
			var count = 0;
			angular.forEach(concerns, function(item, idx) {
				if (item.status === 'Open') {
					count++;
				}
			});
			return count;
		};
		
		//
		// Get Project
		Project.getProject({id: $stateParams.id}).then(function(res) {
			vm.project = res.data;
		});

    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Proponents Project Detail
	//
    // -----------------------------------------------------------------------------------    
    controllerProponentProject.$inject = ['logger', '$modal', 'Project', '$stateParams'];
	//
	function controllerProponentProject(logger, $modal, Project, $stateParams) {
		var vm = this;
		
		vm.closedConcerns = function(concerns) {
			var count = 0;
			angular.forEach(concerns, function(item, idx) {
				if (item.status === 'Closed') {
					count++;
				}
			});
			return count;
		};
			

		vm.openConcerns = function(concerns) {
			var count = 0;
			angular.forEach(concerns, function(item, idx) {
				if (item.status === 'Open') {
					count++;
				}
			});
			return count;
		};
		
		//
		// Get Project
		Project.getProject({id: $stateParams.id}).then(function(res) {
			vm.project = res.data;
		});

    }
    
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Add Anon Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAddComment.$inject = ['$modalInstance'];
	//
    function controllerModalAddComment($modalInstance) { 
		var md = this;
		md.ok = function () { $modalInstance.close(); };
		md.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Documents Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalDocumentViewer.$inject = ['$modalInstance'];
    //
    function controllerModalDocumentViewer($modalInstance) { 
		var md = this;
		md.ok = function () { $modalInstance.close(); };
		md.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
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
	// CONTROLLER: Modal: View Proponent Access
	//
    // -----------------------------------------------------------------------------------
    controllerModalProponentAccess.$inject = ['$modalInstance', 'rProject'];
    //
    function controllerModalProponentAccess($modalInstance, rProject) { 
		var pa = this;
		
		pa.project = rProject;

		pa.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
		
	
})();
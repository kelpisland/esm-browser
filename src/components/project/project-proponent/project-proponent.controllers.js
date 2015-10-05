(function () {

    'use strict';

    angular.module('app.project')

		// Proponent
		.controller('controllerProponentProject', controllerProponentProject)
		.controller('controllerProponentProjectNew', controllerProponentProjectNew)
        .controller('ModalProponentAccess', controllerModalProponentAccess);
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
	// CONTROLLER: Proponents Project Detail
	//
    // -----------------------------------------------------------------------------------    
    controllerProponentProjectNew.$inject = ['logger', 'Project'];
	//
	function controllerProponentProjectNew(logger, Project) {
		var vm = this;
    }
    
   
    
    
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

		pa.userTypes = ['Proponent', 'Consultant'];  // TO DO: Make into service

		pa.contacts = [];
		pa.newContact = {};
		pa.toggle = {};
		pa.filter ={accepted: null};

		pa.panelSort = [
			{'field': 'name', 'name':'Name'},
			{'field': 'role', 'name':'Role'},
			{'field': 'accepted', 'name':'Accepted'}			
		];
		
		pa.inviteUser = function() {
			// TO DO: Validation
			// TO DO: Send Invitation
			pa.newContact._id = pa.contacts.length;
			pa.newContact.accepted = false;

			pa.contacts.push(pa.newContact);
			pa.newContact = {};
			pa.invite = false;
		};

		pa.filterAccepted = function() {
			return function(item) {
				if (pa.filter.accepted === null) {
					return true;
				} else if (pa.filter.accepted === false && item.accepted === false) {
					return true;
				} else if (pa.filter.accepted === true && item.accepted !== false) {
					return false;
				}
			}
		};

		pa.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
		
	
})();
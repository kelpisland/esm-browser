(function () {

    'use strict';

    angular.module('app.project')
    	// Public
        .controller('controllerPublicProject', controllerPublicProject)
        .controller('controllerModalAddComment', controllerModalAddComment)
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
	// CONTROLLER: Modal: Add Anon Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAddComment.$inject = ['$modalInstance'];
	//
    function controllerModalAddComment($modalInstance) { 
		var publicComment = this;
		publicComment.ok = function () { $modalInstance.close(); };
		publicComment.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
	
})();
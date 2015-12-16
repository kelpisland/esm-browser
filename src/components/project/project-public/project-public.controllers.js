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
		vm.commentsByDate = [];
		vm.refreshVisualization = 0;
		vm.commentsByDate = {name: 'bydate', children: [{name: 'Dec 12', size: 4}, {name: 'Dec 13', size: 7}, {name: 'Dec 14', size: 1}, {name: 'Dec 15', size: 100}]};
		vm.refreshVisualization = 1;

    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Add Anon Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAddComment.$inject = ['$modalInstance', 'Project'];
	//
    function controllerModalAddComment($modalInstance, Project) { 
		var publicComment = this;

		Project.getNewPublicComment().then( function(res) {
			publicComment.data = res.data;
		});

		publicComment.ok = function () {
			Project.addPublicComment(publicComment.data).then( function(res) {
				$modalInstance.close();				
			});
		};
		
		publicComment.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
	
})();
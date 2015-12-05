(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskStartProcess', controllerTaskStartProcess);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskStartProcess.$inject = ['$scope', '$rootScope'];
 	//
	function controllerTaskStartProcess($scope, $rootScope) {

		var taskStartProcess = this;

		taskStartProcess.task = {
			name: "Task Name",
			title: "Task Title"
		}
		taskStartProcess.data = {
			startTime: false
		}

		taskStartProcess.go = function() {
			taskStartProcess.data.startTime = Date();
		}

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskStartProcess.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('item', function(newValue) {
			// get item for title
			if (newValue) {
				console.log('task', newValue);
				taskStartProcess.itemId = newValue.item._id;
				taskStartProcess.item = newValue.item;
			}
		});
		
    }    


})();
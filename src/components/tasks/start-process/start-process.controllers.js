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

		taskStartProcess.data = {
			startTime: false
		}

		taskStartProcess.go = function() {
			taskStartProcess.data.startTime = Date();
		};

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskStartProcess.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('task', function(newValue) {
			// get item for title
			if (newValue) {
				taskStartProcess.taskId = newValue._id;
				taskStartProcess.task = newValue;
			}
		});


    }    


})();
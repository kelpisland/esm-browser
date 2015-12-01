(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskValueComponents', controllerTaskValueComponents);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskValueComponents.$inject = ['$scope', '$rootScope', 'Task', 'Notification', '$q', 'ProcessCodes'];
 	//
	function controllerTaskValueComponents($scope, $rootScope, Task, Notification, $q, ProcessCodes) {
		

		var taskValueComponents = this;

		taskValueComponents.mailOut = [];

		// watch projoect
		$scope.$watch('project', function(newValue) {
			if (newValue) {
				taskValueComponents.project = newValue;
			}
		});

		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskValueComponents.taskAnchor = newValue;
			}
		});

		$scope.$watch('task', function(newValue) {
			// get item for title
			if (newValue) {
				taskValueComponents.taskId = newValue._id;
				taskValueComponents.task = newValue;
				// get task data or blank if no record exists.
				Task.getTaskData({'code':newValue.code, 'id':newValue._id}).then( function(res) {
					taskValueComponents.taskData = res.data;
				});
			}
		});

		taskValueComponents.saveTask = function() {
			// structure the data to save.
			//ValueComponents.saveTask();
			console.log('save ValueComponents.controllers.js');
		}

		// taskNotification.completeTask = function() {
		// 	// validate
		// 	// when ok, broadcast
		// 	taskValueComponents.item.value = 'Complete';
		// 	$rootScope.$broadcast('resolveItem', {item: taskValueComponents.itemId});
		// }
		
    }    


})();
(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskCommentPeriodScheduling', controllerTaskCommentPeriodScheduling);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskCommentPeriodScheduling.$inject = ['$scope', '$rootScope', 'Tasks'];
 	//
	function controllerTaskCommentPeriodScheduling($scope, $rootScope, Tasks) {
		var taskCps = this;

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskCps.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('item', function(newValue) {
			// get item for title
			if (newValue) {
				console.log('task', newValue);
				taskCps.itemId = newValue.item._id;
				taskCps.item = newValue.item;
			}

		});

		taskCps.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('complete', taskCps.item);
			taskCps.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskCps.itemId});
		}
		
    }    


})();
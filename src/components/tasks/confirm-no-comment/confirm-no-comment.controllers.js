(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskConfirmNoComment', controllerTaskConfirmNoComment);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskConfirmNoComment.$inject = ['$scope', '$rootScope', 'Tasks'];
 	//
	function controllerTaskConfirmNoComment($scope, $rootScope, Tasks) {
		var taskCnc = this;	

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskCnc.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('item', function(newValue) {
			// get item for title
			if (newValue) {
				console.log('task', newValue);
				taskCnc.itemId = newValue.item._id;
				taskCnc.item = newValue.item;
			}

		});

		taskCnc.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('complete', taskCnc.item);
			taskCnc.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskCnc.itemId});
		}
		
    }    


})();
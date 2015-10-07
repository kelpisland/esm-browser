(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskConfirmWithComment', controllerTaskConfirmWithComment);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskConfirmWithComment.$inject = ['$scope', '$rootScope', 'Tasks'];
 	//
	function controllerTaskConfirmWithComment($scope, $rootScope, Tasks) {
		var taskCwc = this;

		$scope.$watch('anchor', function(newValue) {
			taskCwc.task = newValue;
		});

		$scope.$watch('item', function(newValue) {
			// get item for title
			taskCwc.itemId = newValue;
			Tasks.getItem({id: newValue}).then( function(res) {
				taskCwc.item = res.data;
			});
		});

		taskCwc.completeTask = function() {
			// validate
			// when ok, broadcast
			taskCwc.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {item: taskCwc.itemId});
		}
		
    }    


})();
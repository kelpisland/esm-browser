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

		console.log($scope);		

		$scope.$watch('anchor', function(newValue) {
			taskCnc.task = newValue;
		});

		$scope.$watch('item', function(newValue) {
			// get item for title
			Tasks.getItem({id: newValue}).then( function(res) {
				taskCnc.item = res.data;
			});

		});

		taskCnc.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('resolve', taskCnc.item._id);
			taskCnc.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {item: taskCnc.item._id});
		}
		
    }    


})();
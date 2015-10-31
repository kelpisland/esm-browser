(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskNotifications', controllerTaskNotifications);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskNotifications.$inject = ['$scope', '$rootScope', 'Utils'];
 	//
	function controllerTaskNotifications($scope, $rootScope, Utils) {
		var taskNotifications = this;

		Utils.getRoles().then( function(res) {
			taskNotifications.roles = res.data;
		});

		// $scope.$watch('anchor', function(newValue) {
		// 	if (newValue) {
		// 		taskNotifications.task = newValue;
		// 	}
		// });

		// $scope.$watch('item', function(newValue) {
		// 	// get item for title
		// 	if (newValue) {
		// 		taskNotifications.itemId = newValue._id;
		// 		taskNotifications.item = newValue;
		// 	}
		// 	// Tasks.getItem({id: newValue}).then( function(res) {
		// 	// 	taskNotification.item = res.data;
		// 	// });
		// });

		// taskNotification.completeTask = function() {
		// 	// validate
		// 	// when ok, broadcast
		// 	taskNotifications.item.value = 'Complete';
		// 	$rootScope.$broadcast('resolveItem', {item: taskNotifications.itemId});
		// }
		
    }    


})();
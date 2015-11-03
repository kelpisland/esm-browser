(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskNotifications', controllerTaskNotifications);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskNotifications.$inject = ['$scope', '$rootScope', 'Utils', 'Notifications'];
 	//
	function controllerTaskNotifications($scope, $rootScope, Utils, Notifications) {
		var taskNotifications = this;

		Utils.getRoles().then( function(res) {
			taskNotifications.roles = res.data;
		});

		$scope.$watch('project', function(newValue) {
			if (newValue) {
				taskNotifications.project = newValue;

				taskNotifications.recipients = {};
				// get recipients sorted to groups
				_.each(newValue.team, function(member, idx1){
					_.each(member.systemRole, function(role, idx2){
						if (!taskNotifications.recipients[role.role]) taskNotifications.recipients[role.role] = {viaEmail: [], viaMail: []};
						if (member.viaEmail) {
							taskNotifications.recipients[role.role]['viaEmail'].push(member);
						}
						if (member.viaMail) {
							taskNotifications.recipients[role.role]['viaMail'].push(member);
						}
					});
				});

			}
		});

		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskNotifications.taskAnchor = newValue;
			}
		});

		$scope.$watch('task', function(newValue) {
			// get item for title
			if (newValue) {
				taskNotifications.taskId = newValue._id;
				taskNotifications.task = newValue;
			}
		});

		Notifications.getTemplates().then( function(res) {
			taskNotifications.templates = res.data;
		});

		taskNotifications.setContent = function() {
			taskNotifications.mailContent = taskNotifications.selectedTemplate.content;
		}
		// taskNotification.completeTask = function() {
		// 	// validate
		// 	// when ok, broadcast
		// 	taskNotifications.item.value = 'Complete';
		// 	$rootScope.$broadcast('resolveItem', {item: taskNotifications.itemId});
		// }
		
    }    


})();
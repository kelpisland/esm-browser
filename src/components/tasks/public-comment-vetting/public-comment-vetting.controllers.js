(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskPublicCommentVetting', controllerTaskPublicCommentVetting);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskPublicCommentVetting.$inject = ['$scope', '$rootScope'];
 	//
	function controllerTaskPublicCommentVetting($scope, $rootScope) {
		var taskPubComVet = this;

		taskPubComVet.data = {
			scopeTopics: [ 'value 1','value 2'],
			importantDates: [
				['row 1 col 1', 'row 1 col 2'],
				['row 2 col 1', 'row 2 col 2'],
			],
			openHouseLocation: "1234 Main Street \nSmallville, BC",
			showScopeTopicAddButton: true
		};

		$scope.addRowToScopeTopics = function() {
			taskPubComVet.data.scopeTopics.push(taskPubComVet.data.newScopeTopic);
			taskPubComVet.data.newScopeTopic = "";
			taskPubComVet.data.showScopeTopicAddButton = true;
		}

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskPubComVet.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('task', function(newValue) {
			// get item for title
			console.log('task', newValue);
			if (newValue) {
				taskPubComVet.taskId = newValue._id;
				taskPubComVet.task = newValue;
			}
		});

		taskPubComVet.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('complete', taskPubComVet.item);
			taskPubComVet.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskPubComVet.itemId});
		}

    }


})();
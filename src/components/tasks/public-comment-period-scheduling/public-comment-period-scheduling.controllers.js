(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskPublicCommentPeriodScheduling', controllerTaskPublicCommentPeriodScheduling);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskPublicCommentPeriodScheduling.$inject = ['$scope', '$rootScope'];
 	//
	function controllerTaskPublicCommentPeriodScheduling($scope, $rootScope) {
		var taskPubComSched = this;

		taskPubComSched.data = {
			scopeTopics: ['value 1','value 2'],
			importantDates: [
				['row 1 col 1', 'row 1 col 2'],
				['row 2 col 1', 'row 2 col 2'],
			],
			openHouseLocation: "1234 Main Street \nSmallville, BC",
			showScopeTopicAddButton: true
		};

		$scope.addRowToScopeTopics = function() {
			taskPubComSched.data.scopeTopics.push(taskPubComSched.data.newScopeTopic);
			taskPubComSched.data.newScopeTopic = "";
			taskPubComSched.data.showScopeTopicAddButton = true;
		}

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskPubComSched.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('task', function(newValue) {
			// get item for title
			if (newValue) {
				taskPubComSched.taskId = newValue._id;
				taskPubComSched.task = newValue;
			}
		});

		taskPubComSched.saveTask = function() {
			//save this task
		};

		taskPubComSched.completeTask = function() {
			taskPubComSched.saveTask();
			$rootScope.$broadcast('resolveTask', taskPubComSched.task);
		};

    }


})();
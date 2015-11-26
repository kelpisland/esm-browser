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
		taskPubComSched.item = {
			title: "Title",
			value: "Value"
		};
		taskPubComSched.data = {
			scopeTopics: [ 'value 1','value 2'],
			importantDates: [
				['row 1 col 1', 'row 1 col 2'],
				['row 2 col 1', 'row 2 col 2'],
			],
			openHouseLocation: "1234 Main Street \nSmallville, BC",
			showScopeTopicAddButton: true
		};

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskPubComSched.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('item', function(newValue) {
			// get item for title
			if (newValue) {
				console.log('task', newValue);
				taskPubComSched.itemId = newValue.item._id;
				taskPubComSched.item = newValue.item;
			}
		});

		taskPubComSched.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('complete', taskPubComSched.item);
			taskPubComSched.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskPubComSched.itemId});
		}

    }


})();
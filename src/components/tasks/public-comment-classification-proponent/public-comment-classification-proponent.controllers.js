(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskPublicCommentClassificationProponent', controllerTaskPublicCommentClassificationProponent);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskPublicCommentClassificationProponent.$inject = ['$scope', '$rootScope'];
 	//
	function controllerTaskPublicCommentClassificationProponent($scope, $rootScope) {
		var taskPubComClassProp = this;
		taskPubComClassProp.item = {
			title: "Title",
			value: "Value"
		};
		taskPubComClassProp.data = {
			comments: [
					{
						text: "Comment 1 text",
						dateTime: "2015-12-04T,19:26:02.756Z",
						author: "Comment 1 author",
						status: "In Progress",
						valueComponents: ['Value Component 1','Value Component 2','Value Component 3'],
						associations: ['Association 1','Association 2','Association 3'],
						issues: ['Issue 1','Issue 2','Issue 3'],
					},
					{
						text: "Comment 2 text",
						dateTime: "2015-12-04T,19:26:02.756Z",
						author: "Comment 2 author",
						status: "Done",
						valueComponents: ['Value Component 1','Value Component 2','Value Component 3'],
						associations: ['Association 1','Association 2','Association 3'],
						issues: ['Issue 1','Issue 2','Issue 3'],
					},
					{
						text: "Comment 3 text",
						dateTime: "2015-12-04T,19:26:02.756Z",
						author: "Comment 3 author",
						status: "In Progress",
						valueComponents: ['Value Component 1','Value Component 2','Value Component 3'],
						associations: ['Association 1','Association 2','Association 3'],
						issues: ['Issue 1','Issue 2','Issue 3'],
					},
				]

		};

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskPubComClassProp.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('item', function(newValue) {
			// get item for title
			if (newValue) {
				console.log('task', newValue);
				taskPubComClassProp.itemId = newValue.item._id;
				taskPubComClassProp.item = newValue.item;
			}
		});

		taskPubComClassProp.completeTask = function() {
			// validate
			// when ok, broadcast
			console.log('complete', taskPubComClassProp.item);
			taskPubComClassProp.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskPubComClassProp.itemId});
		}

    }


})();
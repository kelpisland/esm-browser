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
			commentText: "Here is some comment text.",
			author: "Author Name",
			date: "Comment Date",
			valueComponents: ['Value Component 1','Value Component 2','Value Component 3'],
			associations: ['Association 1','Association 2','Association 3'],
			issues: ['Issue 1','Issue 2','Issue 3'],
			comments: [
					{
						comment: "Comment 1 text",
						date: "Comment 1 date",
						author: "Comment 1 author"
					},
					{
						comment: "Comment 2 text",
						date: "Comment 2 date",
						author: "Comment 2 author"
					},
					{
						comment: "Comment 3 text",
						date: "Comment 3 date",
						author: "Comment 3 author"
					},
				]

		};

		$scope.addRowToScopeTopics = function() {
			taskPubComClassProp.data.scopeTopics.push(taskPubComClassProp.data.newScopeTopic);
			taskPubComClassProp.data.newScopeTopic = "";
			taskPubComClassProp.data.showScopeTopicAddButton = true;
		}

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
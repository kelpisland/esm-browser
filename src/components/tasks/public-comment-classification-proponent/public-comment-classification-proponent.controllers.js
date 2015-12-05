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
			doneComments: [],
			comments: [
					{
						text: "Comment 2 text",
						dateTime: "1428423623006",
						author: "Comment 2 author",
						status: "In Progress",
						valueComponents: [
							{
								type: "Value Component",
								title: "Value Component 1"
							},
							{
								type: "Value Component",
								title: "Value Component 2"
							},
							{
								type: "Value Component",
								title: "Value Component 3"
							}
						],
						associations: [

						],
						issues: [
							{
								type: "Issue",
								title: "Issue 1"
							},
							{
								type: "Issue",
								title: "Issue 2"
							},
							{
								type: "Issue",
								title: "Issue 3"
							}
						]
					},
				{
					text: "Comment 1 text",
					dateTime: "1428423623006",
					author: "Comment 1 author",
					status: "Done",
					valueComponents: [
						{
							type: "Value Component",
							title: "Value Component 1"
						},
						{
							type: "Value Component",
							title: "Value Component 2"
						}
					],
					associations: [
						{
							type: "Issue",
							title: "Issue 1"
						},
						{
							type: "Value Component",
							title: "Value Component 3"
						}
					],
					issues: [
						{
							type: "Issue",
							title: "Issue 2"
						},
						{
							type: "Issue",
							title: "Issue 3"
						}
					]
				},
					{
						text: "Comment 3 text",
						dateTime: "1428423623006",
						author: "Comment 3 author",
						status: "In Progress",
						valueComponents: [
							{
								type: "Value Component",
								title: "Value Component 1"
							},
							{
								type: "Value Component",
								title: "Value Component 2"
							},
							{
								type: "Value Component",
								title: "Value Component 3"
							}
						],
						associations: [

						],
						issues: [
							{
								type: "Issue",
								title: "Issue 1"
							},
							{
								type: "Issue",
								title: "Issue 2"
							},
							{
								type: "Issue",
								title: "Issue 3"
							}
						]
					},
				]

		};

		taskPubComClassProp.addToAssociation = function(type, index) {
			if (taskPubComClassProp.data.comments[0].status != "Done"){
				if (type == 'valueComponent') {
					// copy it in...
					taskPubComClassProp.data.comments[0].associations.push(taskPubComClassProp.data.comments[0].valueComponents[index]);
					// and remove it
					taskPubComClassProp.data.comments[0].valueComponents.splice(index, 1);
				} else if (type = 'issue') {
					// copy it in
					taskPubComClassProp.data.comments[0].associations.push(taskPubComClassProp.data.comments[0].issues[index]);
					// and remove it
					taskPubComClassProp.data.comments[0].issues.splice(index, 1);
				}
			}

		}

		taskPubComClassProp.removeFromAssociation = function(index) {
			if (taskPubComClassProp.data.comments[0].status != "Done") {
				if (taskPubComClassProp.data.comments[0].associations[index].type == 'Value Component') {
					taskPubComClassProp.data.comments[0].valueComponents.push(taskPubComClassProp.data.comments[0].associations[index]);
				} else if (taskPubComClassProp.data.comments[0].associations[index].type == 'Issue') {
					taskPubComClassProp.data.comments[0].issues.push(taskPubComClassProp.data.comments[0].associations[index]);
				}
				taskPubComClassProp.data.comments[0].associations.splice(index, 1);
			}
		}

		taskPubComClassProp.next = function() {
			// add this one to the doneComments array
			taskPubComClassProp.data.doneComments.push(taskPubComClassProp.data.comments[0]);
			// and remove it from the comments array.
			taskPubComClassProp.data.comments.splice(0, 1);
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
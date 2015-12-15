(function () {

    'use strict';

    angular.module('app.tasks')
		.controller('controllerTaskPublicCommentClassificationProponent', controllerTaskPublicCommentClassificationProponent)
		.filter ('filterClassifyComments', filterClassifyComments)
		.filter ('filterClassifyValueComponents', filterClassifyValueComponents)
		.filter ('filterClassifyIssues', filterClassifyIssues);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Task for Simple Complete
	//
    // -----------------------------------------------------------------------------------
    controllerTaskPublicCommentClassificationProponent.$inject = ['$scope', '$rootScope'];
 	//
	function controllerTaskPublicCommentClassificationProponent($scope, $rootScope) {
		var taskPubComClassProp = this;

		taskPubComClassProp.buckets = [];
		taskPubComClassProp.issues = [];

		taskPubComClassProp.filterScopeComment = false;
		taskPubComClassProp.filterScopeValueComponents = true;
		taskPubComClassProp.filterScopeIssues = true;		



		taskPubComClassProp.data = {
			comments: [
			{
				comment: "This is a comment",
				author: "Some Author",
				dateAdded: Date(),
				original: null,
				eaoStatus: "Unclassified",
				eaoNotes: "",
				overallStatus: "Unclassified",
				proponentStatus: "Unclassified",
				proponentNotes: '',
				buckets: [],
				issues: [],
				documents: [
					{
						_id:1234,
						name: "document 1",
						url: "http://here/url",
						status: "pending"
					}
				]
			},
			{
				comment: "Hi there, I am a comment.",
				author: "Some Author",
				date: "Some Date",
				overallStatus: "Unclassified",
				proponentStatus: "Unclassified"
			},
			{
				comment: "Hi there, I am a comment.",
				author: "Some Author",
				date: "Some Date",
				overallStatus: "Unclassified",
				proponentStatus: "Unclassified"
			}]
		};


		taskPubComClassProp.deferCommentStatus = function(com) {
			// todo: validation
			com.overallStatus = 'Deferred';
		};

		taskPubComClassProp.finalizeCommentStatus = function(com) {
			// all documents and comment must have a status of not pending.
			if (com.buckets.length > 0 || com.issues.length > 0) {
				com.overallStatus = 'Classified';
			} else {
				window.alert("Please indicate which value components and / or issues this comment is related to before continuing.");
			}
		};

		taskPubComClassProp.refreshBucketSource = function(com) {
			taskPubComClassProp.buckets = [];
			_.each( taskPubComClassProp.project.buckets, function(obj) {
				if (!_.some(com.buckets, _.matchesProperty('code', obj.code))) {
					taskPubComClassProp.buckets.push(obj);
				}	
			});
		};
		
		taskPubComClassProp.addBucketToSelection = function(com, bucket) {
			if(!com.buckets) com.buckets = [];
			com.buckets.push(bucket);

			taskPubComClassProp.refreshBucketSource(com);
		};

		taskPubComClassProp.removeBucketFromSelection = function(com, bucket) {
			_.remove(com.buckets, bucket);
			taskPubComClassProp.refreshBucketSource(com);
		};

		// get the task identifier.  (ID + Task Type)
		$scope.$watch('anchor', function(newValue) {
			if (newValue) {
				taskPubComClassProp.anchor = newValue;
			}
		});

		// get the spec item
		$scope.$watch('task', function(newValue) {
			// get item for title
			if (newValue) {
				taskPubComClassProp.taskId = newValue._id;
				taskPubComClassProp.task = newValue;
			}
		});

		// get the project
		$scope.$watch('project', function(newValue) {
			if (newValue) {
				taskPubComClassProp.project = newValue;
				taskPubComClassProp.buckets = angular.copy(newValue.buckets);
				console.log('class project', newValue.data);
				if(newValue.data) {
					taskPubComClassProp.data.comments = newValue.data.comments;
					console.log('newvalue project', taskPubComClassProp.data.comments);
				}
				

				
			}
		});

		taskPubComClassProp.completeTask = function() {
			// validate
			// when ok, broadcast
			taskPubComClassProp.item.value = 'Complete';
			$rootScope.$broadcast('resolveItem', {itemId: taskPubComClassProp.itemId});
		};

    }

	filterClassifyComments.$inject = ['$filter'];

    function filterClassifyComments($filter) {
    	return function(items, enable, keywords) {
	    	if (enable) {
	    		return $filter('filter')(items, keywords);
	    	} else {
	    		return items;
	    	}
    	}
    }

	filterClassifyValueComponents.$inject = ['$filter'];

    function filterClassifyValueComponents($filter) {
    	return function(items, enable, keywords) {
	    	if (enable) {
	    		return $filter('filter')(items, keywords);
	    	} else {
	    		return items;
	    	}
    	}
    }

    filterClassifyIssues.$inject = ['$filter'];

    function filterClassifyIssues($filter) {
    	return function(items, enable, keywords) {
	    	if (enable) {
	    		return $filter('filter')(items, keywords);
	    	} else {
	    		return items;
	    	}
    	}
    }





		
		// taskPubComClassProp.data = {
		// 	doneComments: [],
		// 	comments: [
		// 			{
		// 				text: "Comment 2 text",
		// 				dateTime: "1428423623006",
		// 				author: "Comment 2 author",
		// 				status: "In Progress",
		// 				valueComponents: [
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 1"
		// 					},
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 2"
		// 					},
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 3"
		// 					}
		// 				],
		// 				associations: [

		// 				],
		// 				issues: [
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 1"
		// 					},
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 2"
		// 					},
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 3"
		// 					}
		// 				]
		// 			},
		// 		{
		// 			text: "Comment 1 text",
		// 			dateTime: "1428423623006",
		// 			author: "Comment 1 author",
		// 			status: "Done",
		// 			valueComponents: [
		// 				{
		// 					type: "Value Component",
		// 					title: "Value Component 1"
		// 				},
		// 				{
		// 					type: "Value Component",
		// 					title: "Value Component 2"
		// 				}
		// 			],
		// 			associations: [
		// 				{
		// 					type: "Issue",
		// 					title: "Issue 1"
		// 				},
		// 				{
		// 					type: "Value Component",
		// 					title: "Value Component 3"
		// 				}
		// 			],
		// 			issues: [
		// 				{
		// 					type: "Issue",
		// 					title: "Issue 2"
		// 				},
		// 				{
		// 					type: "Issue",
		// 					title: "Issue 3"
		// 				}
		// 			]
		// 		},
		// 			{
		// 				text: "Comment 3 text",
		// 				dateTime: "1428423623006",
		// 				author: "Comment 3 author",
		// 				status: "In Progress",
		// 				valueComponents: [
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 1"
		// 					},
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 2"
		// 					},
		// 					{
		// 						type: "Value Component",
		// 						title: "Value Component 3"
		// 					}
		// 				],
		// 				associations: [

		// 				],
		// 				issues: [
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 1"
		// 					},
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 2"
		// 					},
		// 					{
		// 						type: "Issue",
		// 						title: "Issue 3"
		// 					}
		// 				]
		// 			},
		// 		]

		// };

		// taskPubComClassProp.addToAssociation = function(type, index) {
		// 	if (taskPubComClassProp.data.comments[0].status != "Done"){
		// 		if (type == 'valueComponent') {
		// 			// copy it in...
		// 			taskPubComClassProp.data.comments[0].associations.push(taskPubComClassProp.data.comments[0].valueComponents[index]);
		// 			// and remove it
		// 			taskPubComClassProp.data.comments[0].valueComponents.splice(index, 1);
		// 		} else if (type = 'issue') {
		// 			// copy it in
		// 			taskPubComClassProp.data.comments[0].associations.push(taskPubComClassProp.data.comments[0].issues[index]);
		// 			// and remove it
		// 			taskPubComClassProp.data.comments[0].issues.splice(index, 1);
		// 		}
		// 	}

		// }

		// taskPubComClassProp.removeFromAssociation = function(index) {
		// 	if (taskPubComClassProp.data.comments[0].status != "Done") {
		// 		if (taskPubComClassProp.data.comments[0].associations[index].type == 'Value Component') {
		// 			taskPubComClassProp.data.comments[0].valueComponents.push(taskPubComClassProp.data.comments[0].associations[index]);
		// 		} else if (taskPubComClassProp.data.comments[0].associations[index].type == 'Issue') {
		// 			taskPubComClassProp.data.comments[0].issues.push(taskPubComClassProp.data.comments[0].associations[index]);
		// 		}
		// 		taskPubComClassProp.data.comments[0].associations.splice(index, 1);
		// 	}
		// }

		// taskPubComClassProp.next = function() {
		// 	// add this one to the doneComments array
		// 	taskPubComClassProp.data.doneComments.push(taskPubComClassProp.data.comments[0]);
		// 	// and remove it from the comments array.
		// 	taskPubComClassProp.data.comments.splice(0, 1);
		// }

		// get the task identifier.  (ID + Task Type)
		// $scope.$watch('anchor', function(newValue) {
		// 	if (newValue) {
		// 		taskPubComClassProp.anchor = newValue;
		// 	}
		// });

		// // get the spec item
		// $scope.$watch('item', function(newValue) {
		// 	// get item for title
		// 	if (newValue) {
		// 		taskPubComClassProp.itemId = newValue.item._id;
		// 		taskPubComClassProp.item = newValue.item;
		// 	}
		// });

		// taskPubComClassProp.completeTask = function() {
		// 	// validate
		// 	// when ok, broadcast
		// 	taskPubComClassProp.item.value = 'Complete';
		// 	$rootScope.$broadcast('resolveItem', {itemId: taskPubComClassProp.itemId});
		// }

  //   }


})();
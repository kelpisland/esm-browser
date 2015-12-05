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
			comments: [
			{
				comment: "Hi there, I am a comment.",
				author: "Some Author",
				date: "Some Date",
				status: "pending",
				result: "pending",
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
				status: "pending",
				result: "pending"
			},
			{
				comment: "Hi there, I am a comment.",
				author: "Some Author",
				date: "Some Date",
				status: "pending",
				result: "pending"
			}]
		};


		taskPubComVet.finalizeCommentStatus = function(com) {
			// all documents and comment must have a status of not pending.
			var pendingDocument = false;
			if (com.status !== 'pending') {
				_.each(com.documents, function(doc) {
					if (doc.status === 'pending' || !doc.status) {
						pendingDocument = true;
					}
				});
				if (!pendingDocument) {
					com.result = com.status;
				} else {
					window.alert("Please review all documents before viewing the next comment.");
				}
			} else {
				window.alert("Please review the overall comment and all documents before viewing the next comment.");
			}
		};

		

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
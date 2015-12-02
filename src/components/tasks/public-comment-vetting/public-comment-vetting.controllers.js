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
			showComment: true,
			showInappropriateCommentForm: false,
			comment: {
				text: "Hi there, I am a comment.",
				author: "Some Author",
				date: "Some Date",
				status: "pending"
			}

		};

		$scope.vetComment = function() {
			alert("vetComment Function Called.");
		}
		$scope.flagComment = function() {
			taskPubComVet.data.showComment = false;
			taskPubComVet.data.showInappropriateCommentForm = true;
		}
		$scope.deleteComment = function() {
			alert("deleteComment Function Called.");
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
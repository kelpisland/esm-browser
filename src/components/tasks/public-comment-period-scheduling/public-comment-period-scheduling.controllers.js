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
			startDate: "Wed Dec 16 2015 10:30:00 GMT-0800 (PST)",
			endDate: "Wed Dec 16 2015 10:30:00 GMT-0800 (PST)",
			scopeTopics: [
				{
					text:"value 1",
					edit:false,
					delete: false
				},
				{
					text:"value 2",
					edit:false,
					delete: false
				},
				{
					text:"value 3",
					edit:false,
					delete: false
				},
			],
			importantDates: [
				['row 1 col 1', 'row 1 col 2'],
				['row 2 col 1', 'row 2 col 2'],
			],
			openHouses: [
				{
					location: "1234 Main Street \nSmallville, BC",
					dateTime: "Wed Dec 16 2015 10:30:00 GMT-0800 (PST)"

				},
				{
					location: "1234 Main Avenue \nBigtown, BC",
					dateTime: "Wed Dec 16 2015 10:30:00 GMT-0800 (PST)"

				},
			],
			showScopeTopicAddButton: true
		};

		$scope.addRowToScopeTopics = function() {
			taskPubComSched.data.scopeTopics.push({ text:taskPubComSched.data.newScopeTopic, edit:false });
			taskPubComSched.data.newScopeTopic = "";
			taskPubComSched.data.showScopeTopicAddButton = true;
		}

		$scope.editScopeTopicsRow = function(index) {
			taskPubComSched.data.scopeTopics[index].newText = taskPubComSched.data.scopeTopics[index].text;
			taskPubComSched.data.scopeTopics[index].edit=true;
		}

		$scope.editScopeTopicsRowOkay = function(index) {
			taskPubComSched.data.scopeTopics[index].text = taskPubComSched.data.scopeTopics[index].newText;
			taskPubComSched.data.scopeTopics[index].newText = '';
			taskPubComSched.data.scopeTopics[index].edit=false;
		}

		$scope.editScopeTopicsRowCancel = function(index) {
			taskPubComSched.data.scopeTopics[index].newText = '';
			taskPubComSched.data.scopeTopics[index].edit=false;
		}

		$scope.deleteScopeTopicsRow = function(index) {
			taskPubComSched.data.scopeTopics[index].delete=true;
		}

		$scope.deleteScopeTopicsRowConfirm = function(index) {
			taskPubComSched.data.scopeTopics.splice(index,1);
		}
		$scope.deleteScopeTopicsRowCancel = function(index) {
			taskPubComSched.data.scopeTopics[index].delete = false;
		}
		$scope.deleteOpenHouse = function(index) {
			taskPubComSched.data.openHouses.splice(index, 1);
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
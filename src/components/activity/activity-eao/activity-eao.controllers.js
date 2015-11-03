(function () {

    'use strict';

    angular.module('app.activity')
		.controller('controllerEAOActivity', controllerEAOActivity)
		.controller('controllerEAOActivityDetail', controllerEAOActivityDetail)
		.controller('controllerEAOActivityTasks', controllerEAOActivityTasks)
		.controller('controllerEAOActivityProcesses', controllerEAOActivityProcesses);
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Activity EAO
	//
    // -----------------------------------------------------------------------------------
    controllerEAOActivity.$inject = ['$scope', 'logger', '$modal', 'Activity', 'Project', '$stateParams'];
	//
	function controllerEAOActivity($scope, logger, $modal, Activity, Project, $stateParams) {
		var actBase = this;
		//
		// Get Activity

		Activity.getProjectActivity({id: $stateParams.id}).then(function(res) {
			actBase.activity = res.data;
			//
			// Get Project
			Project.getProject({id: res.data.projectId}).then(function(res) {
				actBase.project = res.data;
			});			
		});
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Activity Detail
	//
    // -----------------------------------------------------------------------------------
    controllerEAOActivityDetail.$inject = ['$scope'];
	//
	function controllerEAOActivityDetail($scope) {
		var actDetail = this;

		// actDetail.toggleDocumentFilter = function(idx) {
		// 	if (actDetail.filteredDocumentsFor === undefined || actDetail.filteredDocumentsFor !== idx) {
		// 		actDetail.filterDocumentsBy = 'resp1235';
		// 		actDetail.filteredDocumentsFor = idx;
		// 	} else {
		// 		actDetail.filterDocumentsBy = '';
		// 		actDetail.filteredDocumentsFor = undefined;
		// 	}
		// }

		$scope.$watch('activity', function(newValue) {
			actDetail.activity = newValue;
		});
		
		$scope.$watch('project', function(newValue) {
			actDetail.project = newValue;
		});
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Activity Tasks
	//
    // -----------------------------------------------------------------------------------
    controllerEAOActivityTasks.$inject = ['$scope', '$rootScope', '$filter'];
	//
	function controllerEAOActivityTasks($scope, $rootScope, $filter) {
		var actTasks = this;
		actTasks.form = {};

		$scope.$watch('activity', function(newValue) {
			actTasks.activity = newValue;
		});
		
		$scope.$watch('project', function(newValue) {
			actTasks.project = newValue;
		});

		// add new tasks or processes when a click or event is sent to this controller
		actTasks.updateTaskList = function(item, project, idx) {
			console.log(idx);
			item.currentStatusTitle = item.statusValues[idx].title;

			// Show any other processes
			if (item.processCode) {
				$rootScope.$broadcast('taskAddProcess', {'procCode': item.processCode, 'item': item, 'project': project});
			}
		};

		// when a task is marked complete, refresh the list.
		// TODO: This needs work.  It hasn't been tested.
		$rootScope.$on('resolveItem', function(req, targetId) {
			var idx=0;
			_.each( actTasks.activity.tasks, function( task, key1 ) {
				if (item._id === targetId) {
					_.each( task.statusValues, function( item, key2 ) {
						if (val.title === 'Complete') {
							idx = key3;
						}							
					});
					actTasks.updateTaskList(item, idx);	
				}
			});
		});


		// change the task value with a click
		actTasks.taskChange = function(item, project, $event) {
			// find the current value in values
			// altkey only
			if ($event.altKey && !$event.shiftKey) {
				item.value = "Not Applicable";
				return;
			}

			// set current item
			// actTasks.form.currentTask = 'task-' + $filter('kebab')(item._id);
			project.currentTask = item.code + item._id;
			
			// find the current value profile.
			var idx = 0;
			_.each( item.statusValues, function(val, key) {
				if (val.title === item.currentStatusTitle) {
					idx = key;
				}
			});
			
			console.log(idx, project);

			// if shiftkey is down, iterate the status	
			if (!$event.altKey && $event.shiftKey) {
				idx++;
				if (idx >= 2) { // stop at in progress, complete is done another way.
					idx = 0;
				}
			}
			actTasks.updateTaskList(item, project, idx);

		};


    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Activity Tasks
	//
    // -----------------------------------------------------------------------------------
    controllerEAOActivityProcesses.$inject = ['$scope', '$rootScope'];
	//
	function controllerEAOActivityProcesses($scope, $rootScope) {
		var actProcs = this;

		actProcs.form = {};

		// key the task to the originating item so we can have multiple instances of the same panel
		$rootScope.$on('taskAddProcess', function(event, args) {
			//var newKey = (args.item._id + '_' + args.procCode);
			//actProcs.process = {'anchor': newKey, 'tmpl': _.kebabCase('tmpl-' + args.procCode), 'item':args.item, 'project':args.project};
 		});

		$scope.$watch('activity', function(newValue) {
			actProcs.activity = newValue;
		});
		
		$scope.$watch('project', function(newValue) {
			actProcs.project = newValue;
		});

    }
    
})();
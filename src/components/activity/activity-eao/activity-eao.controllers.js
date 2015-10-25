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
	function controllerEAOActivityDetail($scope ) {
		var actDetail = this;
		
		actDetail.comments = [
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'},
			{'author':'EAO', 'comment':'Comment text that scrolls Bootstrap requires a containing element to wrap site contents and house our grid system. You may choose one of two containers to use in your projects. Note that, due to padding and more, neither container is nestable.'}			
		];
		
		actDetail.toggleDocumentFilter = function(idx) {
			if (actDetail.filteredDocumentsFor === undefined || actDetail.filteredDocumentsFor !== idx) {
				actDetail.filterDocumentsBy = 'resp1235';
				actDetail.filteredDocumentsFor = idx;
			} else {
				actDetail.filterDocumentsBy = '';
				actDetail.filteredDocumentsFor = undefined;
			}
		}
		
		$scope.$watch('detail', function(newValue) {	
			actDetail.activity = newValue;
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

		// add new tasks or processes when a click or event is sent to this controller
		actTasks.updateTaskList = function(item, idx) {
			item.value = item.values[idx].title;

			// Show any other task groups
			if (item.values[idx].groups) {
				_.each( item.values[idx].groups, function( val, key ) {
					actTasks.tasks[val].visible = true;
				});
			}
			// Show any other processes
			if (item.process) {
				$rootScope.$broadcast('taskAddProcess', {'procs': item.process, 'item': item});
			}
		};



		// when a task is marked complete, refresh the list.
		$rootScope.$on('resolveItem', function(req, targetId) {
			var idx=0;
			console.log('Resolve', targetId);
			_.each( actTasks.tasks, function( task, key1 ) {
				console.log('tasks', task);
				_.each( task.items, function( item, key2 ) {
					if (item._id === targetId) {
						// item.value = 'Complete';
						_.each( item.values, function( val, key3 ) {
							if (val.title === 'Complete') {
								idx = key3;
							}							
						});
						actTasks.updateTaskList(item, idx);	
					}
				});
			});
		});


		// change the task value with a click
		actTasks.taskChange = function(item, $event) {
			// find the current value in values
			// altkey only
			if ($event.altKey && !$event.shiftKey) {
				item.value = "Not Applicable";
				return;
			}

			// set current item
			actTasks.form.currentTask = 'task-' + $filter('kebab')(item._id);

			// find the current value profile.
			var idx = 0;
			_.each( item.values, function(val, key) {
				if (val.title === item.value) {
					idx = key;
				}
			});
			
			// if shiftkey is down, iterate the status	
			if (!$event.altKey && $event.shiftKey) {
				idx++;
				if (idx >= 2) { // stop at in progress, complete is done another way.
					idx = 0;
				}
			}
			actTasks.updateTaskList(item, idx);

		};


		


		$scope.$watch('tasks', function(newValue) {	
			actTasks.tasks = newValue;
		});
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
			console.log('args', args);
			var newKey = (args.item._id + '_' + args.procs);
			actProcs.process = {'anchor': newKey, 'tmpl': _.kebabCase('tmpl-' + args.procs), 'item':args.item};
 		});

		// $scope.$watch('processes', function(newValue) {	
		// 	actProcs.processes = newValue;
		// });
    }
    
})();
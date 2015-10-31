 (function () {

    'use strict';

    angular.module('app.utils')
        .controller('controllerQuickLinks', controllerQuickLinks)
	    .controller('controllerRecentActivity', controllerRecentActivity)   
        .controller('controllerModalAddComment', controllerModalAddComment)
        .controller('controllerPanelSort', controllerPanelSort)
        .controller('controllerModalResearchDetail', controllerModalResearchDetail)
        .controller('controllerRolesSelect', controllerRolesSelect)
        .controller('controllerUsersSelect', controllerUsersSelect)
        .controller('controllerModalUsersSelect', controllerModalUsersSelect);
        
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Quick Links
	//
    // -----------------------------------------------------------------------------------
    controllerQuickLinks.$inject = ['logger', 'Utils'];
    /* @ngInject */
    function controllerQuickLinks(logger, Utils) {
		var qlPanel = this;
		//
		Utils.getQuickLinks().then( function(res) {
			qlPanel.quickLinks = res.data;
		});
    }
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Projects Recent News
	//
    // -----------------------------------------------------------------------------------
    controllerRecentActivity.$inject = ['logger', 'Utils'];
    /* @ngInject */
    function controllerRecentActivity(logger, Utils) {
		var raPanel = this;
		//
		Utils.getRecentActivity().then( function(res) {
			raPanel.recentActivity = res.data;
		});
    }
        
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: Add Anon Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAddComment.$inject = ['$modalInstance'];
	//
    function controllerModalAddComment($modalInstance) { 
		var md = this;
		md.ok = function () { $modalInstance.close(); };
		md.cancel = function () { $modalInstance.dismiss('cancel'); };
	};

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Panel Sort
	//
    // -----------------------------------------------------------------------------------
    controllerPanelSort.$inject = ['$scope', '$filter'];
    //
    function controllerPanelSort($scope, $filter) { 
		var panelSort = this;
		var orderBy = $filter('orderBy');
		
		panelSort.fields = $scope.fields;
		
		panelSort.column = '';
		panelSort.direction = '-';
		panelSort.field = '';
		
		panelSort.sort = function(field) {
			if (field === panelSort.column) {
				if (panelSort.direction === '-') {
					panelSort.direction = '+';
				} else {
					panelSort.direction = '-';				
				}
// 				if (panelSort.direction === '') {
// 					panelSort.direction = '-';
// 				} else if (panelSort.direction === '-') {
// 					panelSort.direction = '+';				
// 				} else if (panelSort.direction === '+') {
// 					panelSort.direction = '';
// 				}
			} else {
				panelSort.column = field;
				panelSort.direction = '-';
			}
			if (panelSort.direction === '') {
				panelSort.field = '';
			} else {
				panelSort.field = panelSort.direction + panelSort.column;
			}
			$scope.data = orderBy($scope.data, panelSort.field, false);
		};
	};	
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Project Research Detail
	//
    // -----------------------------------------------------------------------------------    
    controllerModalResearchDetail.$inject = ['$scope', 'Utils', '$modalInstance'];
	//
	function controllerModalResearchDetail($scope, Utils, $modalInstance) {
		var rd = this;
		
		$scope.$watchGroup(['seed', 'term'], function(newValue) {
			if (newValue[0] && newValue[1]) {
				rd.term = newValue[1];
				// array of terms is sent to service
				Utils.getProjectResearchDetail({'seed': newValue[0], 'term': newValue[1]}).then( function(res) {
					rd.relatedData = res.data;
				});
			}
		});

		rd.cancel = function () { $modalInstance.dismiss('cancel'); };
    }     
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Roles Select
	//
    // -----------------------------------------------------------------------------------    
    controllerRolesSelect.$inject = ['$scope', 'Utils'];
	//
	function controllerRolesSelect($scope, Utils) {
		var utilRolesSelect = this;

		$scope.$watch('selectedRoles', function(newValue) {
			if (newValue) {
				utilRolesSelect.access = newValue;
			}
		});

		$scope._ = _;

		// get roles
		Utils.getRoles().then( function(res) {
			utilRolesSelect.roles = res.data;
		});

		// 
		utilRolesSelect.toggleAccess = function(role) {
			if( _.contains(utilRolesSelect.access, role) ) {
				// remove
				_.remove(utilRolesSelect.access, function(item) {
					return item === role;
				});
			} else {
				utilRolesSelect.access.push(role);
			}
		};
	}
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Users Select
	//
    // -----------------------------------------------------------------------------------    
    controllerUsersSelect.$inject = ['$scope', '$modal'];
	//
	function controllerUsersSelect($scope, $modal) {
		var utilUsersSelect = this;

		utilUsersSelect.users = $scope.selectedUsers || [];

		utilUsersSelect.userChooser = function() {
			var modalUsersView = $modal.open({
				animation: true,
				templateUrl: 'components/utils/partials/modal-users-select.html',
				controller: 'controllerModalUsersSelect',
				controllerAs: 'utilUsers',
				size: 'lg',
				resolve: {
					rUsers: function() {
						return utilUsersSelect.users;
					}
				}
			});
			modalUsersView.result.then(function () {}, function () {});
		};

	}
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Roles Select
	//
    // -----------------------------------------------------------------------------------    
    controllerModalUsersSelect.$inject = ['$scope', 'rUsers', '$modalInstance', 'Project', 'Utils'];
	//
	function controllerModalUsersSelect($scope, rUsers, $modalInstance, Project, Utils) {
		var utilUsers = this;

		$scope._ = _;

		utilUsers.form = {filtered:null};

		// TODO: actually get a project linkage here.
		Project.getProjectContacts({id:123}).then( function(res) {
			utilUsers.users = res.data;
		});

		Utils.getRoles().then( function(res) {
			utilUsers.roles = res.data;
		});

		// collection of users.
		utilUsers.selected = rUsers;


		// remove a user from the selected list.
		utilUsers.removeUserFromSelected = function(user) {
			if( _.contains(utilUsers.selected, user) ) {
				// remove
				_.remove(utilUsers.selected, function(item) {
					return item === user;
				});
			}
		};

		// add the user to the selected list
		utilUsers.addUserToSelected = function(user) {
			if(!_.includes(utilUsers.selected, user)) {
				utilUsers.selected.push(user);
			}
		};

		// setup new users
		utilUsers.userNew = {allowChoice: false, viaEmail:true};

		// add a new 
		utilUsers.addNewUser = function() {
			// TODO: validate user record.
			utilUsers.selected.push(utilUsers.userNew);
			// if new user is invited to register, flag that with a token.
			// and resolve later on.
		};

		utilUsers.ok = function () { $modalInstance.close(utilUsers.users); };
		utilUsers.cancel = function () { $modalInstance.dismiss('cancel'); };


		// utilRolesSelect.toggleAccess = function(role) {
		// 	if( _.contains(utilRolesSelect.access, role) ) {
		// 		// remove
		// 		_.remove(utilRolesSelect.access, function(item) {
		// 			return item === role;
		// 		});
		// 	} else {
		// 		utilRolesSelect.access.push(role);
		// 	}
		// };
	}
})();
(function () {

    'use strict';

    angular.module('app.projects')
		// EAO
		.controller('controllerEAOProjects', controllerEAOProjects)
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: EAO Projects Main
	//
    // -----------------------------------------------------------------------------------
    controllerEAOProjects.$inject = ['$scope', '$state', 'Projects', 'Global'];
    /* @ngInject */
    function controllerEAOProjects($scope, $state, Projects, Global) {
		var vm = this;

		Projects.getProjects().then( function(res) {
			vm.projects = res.data;
		});

		vm.proponent = Global.user;

		vm.panelSort = [
			{'field': 'name', 'name':'Title'},
			{'field': 'stage', 'name':'Stage'},
			{'field': 'requirement', 'name':'Requires'},
			{'field': 'updatedDate', 'name':'Date Updated'},
			{'field': 'createDate', 'name':'Date Created'},			
		];

		vm.view = 'list';

    }        

})();

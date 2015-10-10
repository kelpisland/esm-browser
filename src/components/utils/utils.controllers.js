(function () {

    'use strict';

    angular.module('app.utils')
        .controller('controllerQuickLinks', controllerQuickLinks)
	    .controller('controllerRecentActivity', controllerRecentActivity)   
        .controller('controllerModalAddComment', controllerModalAddComment)
        .controller('controllerPanelSort', controllerPanelSort)
        .controller('controllerModalResearchDetail', controllerModalResearchDetail);
        
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

})();
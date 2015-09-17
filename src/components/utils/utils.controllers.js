(function () {

    'use strict';

    angular.module('app.utils')
        .controller('controllerQuickLinks', controllerQuickLinks)
	    .controller('controllerRecentActivity', controllerRecentActivity)   
        .controller('controllerModalAddComment', controllerModalAddComment)
        .controller('controllerModalDocumentViewer', controllerModalDocumentViewer);
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
	// CONTROLLER: Modal: View Documents Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalDocumentViewer.$inject = ['$modalInstance'];
    //
    function controllerModalDocumentViewer($modalInstance) { 
		var md = this;
		md.ok = function () { $modalInstance.close(); };
		md.cancel = function () { $modalInstance.dismiss('cancel'); };
	};
})();
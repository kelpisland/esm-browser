(function () {

    'use strict';

    angular.module('app.alerts')
		.controller('controllerModalAlertViewer', controllerModalAlertViewer);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Alert Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAlertViewer.$inject = ['$modalInstance', 'rUser', 'rAlerts'];
    //
    function controllerModalAlertViewer($modalInstance, rUser, rAlerts) { 
		var alertView = this;

		alertView.panelSort = [
  			{'field': 'urgency', 'name':'Urgency'},
  			{'field': 'dateIntitiated', 'name':'Date'}
  		];

		alertView.user = rUser;
		alertView.alerts = rAlerts;

		alertView.ok = function () { $modalInstance.close(); };
		alertView.cancel = function () { $modalInstance.dismiss('cancel'); };
	}
})();

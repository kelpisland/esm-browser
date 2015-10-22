(function () {

    'use strict';

    angular.module('app.alerts')
		.controller('controllerModalAlertViewer', controllerModalAlertViewer)
		.controller('controllerAlertList', controllerAlertList);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Alert Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAlertViewer.$inject = ['$modalInstance', 'rAlerts'];
    //
    function controllerModalAlertViewer($modalInstance, rAlerts) { 
		var alertView = this;

		alertView.panelSort = [
  			{'field': 'urgency', 'name':'Urgency'},
  			{'field': 'dateIntitiated', 'name':'Date'}
  		];

		alertView.alerts = rAlerts;

		alertView.ok = function () { $modalInstance.close(); };
		alertView.cancel = function () { $modalInstance.dismiss('cancel'); };
	}
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Alert List
	//
    // -----------------------------------------------------------------------------------
    controllerAlertList.$inject = ['Alerts'];
    //
    function controllerAlertList(Alerts) { 
		var alertList = this;

		Alerts.getAlerts().then( function(res) {
			alertList.alerts = res.data;
		});

	}	
})();

(function () {

    'use strict';

    angular.module('app.alerts')
		.controller('controllerModalAlertsViewer', controllerModalAlertsViewer)
		.controller('controllerModalAlertViewer', controllerModalAlertViewer)	
		.controller('controllerModalAlertNew', controllerModalAlertNew)				
		.controller('controllerAlertList', controllerAlertList);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Alerts Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAlertsViewer.$inject = ['$modalInstance', 'rAlerts'];
    //
    function controllerModalAlertsViewer($modalInstance, rAlerts) { 
		var alertsView = this;

		alertsView.panelSort = [
  			{'field': 'urgency', 'name':'Urgency'},
  			{'field': 'dateIntitiated', 'name':'Date'}
  		];

		alertsView.alerts = rAlerts;

		alertsView.ok = function () { $modalInstance.close(); };
		alertsView.cancel = function () { $modalInstance.dismiss('cancel'); };
	}
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Alert Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAlertViewer.$inject = ['$modalInstance', 'rAlerts'];
    //
    function controllerModalAlertViewer($modalInstance, rAlerts) { 
		var alertView = this;

		alertView.alert = rAlerts;

		alertView.ok = function () { $modalInstance.close(); };
		alertView.cancel = function () { $modalInstance.dismiss('cancel'); };
	}
    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Alert Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalAlertNew.$inject = ['$scope', '$modalInstance', 'Alerts', '$location'];
    //
    function controllerModalAlertNew($scope, $modalInstance, Alerts, $location) { 
		var alertNew = this;

		alertNew.form = {newReminder:null};

		Alerts.getNew().then( function(res) {
			alertNew.alert = res.data;
		});

		$scope.pageLocation = $location.url();

		alertNew.addReminder = function(newValue) {
			if ( newValue ) {
				// TODO: move these spec to the server.
				// add a blank reminder record to the alert.
				if (newValue === 'onTask') {
					var newReminderPrim = {
						"type": "onTask",
						"task":{},
						"status":"",
						"accessRoles":[],
						"accessUsers":[]
					}
					alertNew.alert.reminders.push(newReminderPrim);
				} else if (newValue === 'onDate') { 
					var newReminderPrim = {
						"type": "onDate",
						"duration":1,
						"unit":"days",
						"event":{},
						"accessRoles":[],
						"accessUsers":[]
					}
					alertNew.alert.reminders.push(newReminderPrim);
				} else if (newValue === 'before') { 
					var newReminderPrim = {
						"type": "before",
						"duration":1,
						"unit":"days",
						"event":{},
						"accessRoles":[],
						"accessUsers":[]
					}
					alertNew.alert.reminders.push(newReminderPrim);
				}
			}
		}

		alertNew.removeReminder = function(rem) {
			if( _.contains(alertNew.alert.reminders, rem) ) {
				// remove
				_.remove(alertNew.alert.reminders, function(item) {
					return item === rem;
				});
			}
		}

		alertNew.ok = function () { $modalInstance.close(); };
		alertNew.cancel = function () { $modalInstance.dismiss('cancel'); };
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

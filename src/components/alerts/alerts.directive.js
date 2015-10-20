(function () {

    'use strict';

    angular.module('app.alerts')      
        .directive('modalAlertViewer', directiveModalAlertViewer);

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal document viewer
	//
    // -----------------------------------------------------------------------------------
    directiveModalAlertViewer.$inject = ['$modal', 'Alerts'];
    /* @ngInject */
    function directiveModalAlertViewer($modal, Alerts) {
        var directive = {
            restrict:'A',
            scope : {
                user: '='
            },                         
			link : function(scope, element, attrs) {

                Alerts.getAlerts().then( function(res) {
                    element.html('<i class="glyphicon glyphicon-alert"></i>&nbsp;&nbsp;' + res.data.length + " alerts");
                    angular.element(element).after("&nbsp;|&nbsp;");
    				element.on('click', function() {
    					var modalAlertView = $modal.open({
    						animation: true,
    						templateUrl: 'components/alerts/partials/modal-alert-viewer.html',
    						controller: 'controllerModalAlertViewer',
    						controllerAs: 'alertView',
    						size: 'lg',
                            resolve: {
                                rUser: function() {return scope.user},
                                rAlerts: function() {return res.data}
                            }
    					});
    					modalAlertView.result.then(function () {}, function () {});
    				});
                });


			}
        };
        return directive;
    }
})();

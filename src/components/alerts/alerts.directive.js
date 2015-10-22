(function () {

    'use strict';

    angular.module('app.alerts')      
        .directive('modalAlertViewer', directiveModalAlertViewer)
        .directive('tmplAlertList', directiveAlertList);

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
                divider: '='
            },                         
			link : function(scope, element, attrs) {

                Alerts.getAlerts().then( function(res) {
                    element.html('<i class="glyphicon glyphicon-alert"></i>&nbsp;&nbsp;' + res.data.length + " alerts");
                    if( scope.divider ) {
                        angular.element(element).after("&nbsp;|&nbsp;");
                    }
    				element.on('click', function() {
    					var modalAlertView = $modal.open({
    						animation: true,
    						templateUrl: 'components/alerts/partials/modal-alert-viewer.html',
    						controller: 'controllerModalAlertViewer',
    						controllerAs: 'alertView',
    						size: 'lg',
                            resolve: {
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

    // -----------------------------------------------------------------------------------
    //
    // DIRECTIVE: Alert List
    //
    // -----------------------------------------------------------------------------------
    directiveAlertList.$inject = ['$modal', 'Alerts'];
    /* @ngInject */
    function directiveAlertList($modal, Alerts) {
        var directive = {
            restrict:'E',
            templateUrl: 'components/alerts/partials/alert-list.html',
            controller: 'controllerAlertList',
            controllerAs: 'alertList'
        };
        return directive;
    }


})();

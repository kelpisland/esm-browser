(function() {
    'use strict';

    angular.module('app.configuration')
        .service('Configuration', serviceConfiguration);
    // -----------------------------------------------------------------------------------
	//
	// Service: Configuration Services
	//
    // -----------------------------------------------------------------------------------
    serviceConfiguration.$inject = ['$http', 'SERVERAPI'];
    /* @ngInject */
    function serviceConfiguration($http, SERVERAPI) {

        // Generalized config items.
        // the context defines the url.
        var getConfig = function() {
            return $http({method:'GET',url: SERVERAPI + '/sys/configs'});
        };
        var getConfigItem = function(context) {
            console.log('context', context);
            return $http({method:'GET',url: SERVERAPI + '/' + context});
        };
        var newConfigItem = function(context) {
            return $http({method:'GET',url: SERVERAPI + '/new/' + context});
        };
        var addConfigItem = function(req, context) {
            console.log(req, context);
            return $http({method:'POST',url: SERVERAPI + '/' + context, data: req});
        }
        var saveConfigItem = function(req, context) {
            return $http({method:'PUT',url: SERVERAPI + '/' + context + '/' + req._id, data: req});
        }

        return {
            getConfig: getConfig,

            getConfigItem: getConfigItem,
            newConfigItem: newConfigItem,
            addConfigItem: addConfigItem,
            saveConfigItem: saveConfigItem
		};
    }    
})();
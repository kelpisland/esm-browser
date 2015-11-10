(function () {

    'use strict';

    angular.module('app.configuration')
        .controller('controllerConfiguration', controllerConfiguration)
        .controller('controllerConfigManageElement', controllerConfigManageElement);


    // ----- ControllerFunction -----
    controllerConfiguration.$inject = [];
    /* @ngInject */
    function controllerConfiguration() {
    	var configData = this;
        // load all configurations
        configData.config = {};
    }

    // The base controller loads the entire context of the project configuration.
    // The base controller variable is loaded into each type of category.

    // ----- controllerFunction -----
    controllerConfigManageElement.$inject = ['$scope'];

    /* @ngInject */
    function controllerConfigManageElement($scope) {
        var configDataElement = this;

        $scope.$watch('config', function(newValue) {
            if (newValue) {
                configDataElement.config = newValue;
            }
        });

        configDataElement.records = [];

        $scope.$watch('records', function(newValue) {
            if (newValue) {
                configDataElement.records = newValue;
            }
        });

        configDataElement.activeRecord = undefined;

        // ----- Add a new record -----
        configDataElement.newRecord = function() {
            configDataElement.activeRecord = angular.copy({});
            configDataElement.activeRecordNew = true;
        };


        configDataElement.editRecord = function(selectedRecord) {
            configDataElement.activeRecordOriginal = selectedRecord;
            configDataElement.activeRecord = angular.copy(selectedRecord);
            configDataElement.activeRecordNew = false;
        };

        configDataElement.addRecord = function() {
            configDataElement.records.push( angular.copy( configDataElement.activeRecord ));
            configDataElement.msg = 'Record Added';
            configDataElement.activeRecord = undefined;
        };

        configDataElement.saveRecord = function() {
            _.assign(configDataElement.activeRecordOriginal, configDataElement.activeRecord);
            configDataElement.msg = 'Record Saved';
            configDataElement.activeRecord = undefined;
        };

    }


})();

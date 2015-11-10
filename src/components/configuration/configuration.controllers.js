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
        configData.config = {requirements:[{buckets:[]}], buckets:['one', 'two']};
    }

    // The base controller loads the entire context of the project configuration.
    // The base controller variable is loaded into each type of category.

    // ----- controllerFunction -----
    controllerConfigManageElement.$inject = ['$scope'];

    /* @ngInject */
    function controllerConfigManageElement($scope) {
        var configDataElement = this;

        configDataElement.records = [];

        $scope.$watch('config', function(newValue) {
            if (newValue) {
                configDataElement.config = newValue;
            }
        });

        $scope.$watch('records', function(newValue) {
            if (newValue) {
                configDataElement.records = newValue;
            }
        });

        configDataElement.activeRecord = undefined;

        // ----- New record template -----
        configDataElement.newRecord = function() {
            configDataElement.activeRecord = angular.copy({});
            configDataElement.activeRecordNew = true;
        };

        // ----- Edit a new record -----
        configDataElement.editRecord = function(selectedRecord) {
            configDataElement.activeRecordOriginal = selectedRecord;
            configDataElement.activeRecord = angular.copy(selectedRecord);
            configDataElement.activeRecordNew = false;
        };

        // ----- Add a new record -----
        configDataElement.addRecord = function() {
            configDataElement.records.push( angular.copy( configDataElement.activeRecord ));
            console.log( 'active', configDataElement.activeRecord );
            configDataElement.msg = 'Record Added';
            configDataElement.activeRecord = undefined;
        };

        // ----- Save existing record -----
        configDataElement.saveRecord = function() {
            _.assign(configDataElement.activeRecordOriginal, configDataElement.activeRecord);
            configDataElement.msg = 'Record Saved';
            configDataElement.activeRecord = undefined;
        };

    }


})();

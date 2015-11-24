(function () {

    'use strict';

    angular.module('app.configuration')
        .controller('controllerConfiguration', controllerConfiguration)
        .controller('controllerConfigManageElement', controllerConfigManageElement);


    // ----- ControllerFunction -----
    controllerConfiguration.$inject = ['$rootScope', '$scope', 'Configuration'];
    /* @ngInject */
    function controllerConfiguration($rootScope, $scope, Configuration) {
    	var configData = this;
        // load all configurations
        configData.curTab = undefined;
        configData.config = undefined;

        Configuration.getConfig().then( function(res) {
            configData.config = res.data;
        });


        $rootScope.$on('refreshConfig', function() { 
            Configuration.getConfig().then( function(res) {
                configData.config = res.data;
            });
        } );


        // configData.createStream = function() {

        //     Configuration.getSubItem('milestone').then( function(res) {
        //         console.log(res.data);
        //     });

        //     // Configuration.newStream().then( function(res) {
        //     //     configData.currentStream = res.data;
        //     //     configData.isNew = true;
        //     //     console.log('stream', configData.currentStream);
        //     // });
        // }

        // set the stream to edit on all other pages.
        // configData.selectStream = function(stream) {
        //     configData.data.currentStream = stream;
        // }

        // ----- Add a new record -----
        // configData.addStream = function() {
        //     Configuration.addStream(configData.currentStream).then( function(res) {
        //         configData.isNew = false;
        //         Configuration.getStreams().then( function(res) {
        //             configData.data.configStreams = res.data;
        //         });
        //     });
        // };

        // ----- Save existing record -----
        // configData.saveStream = function() {
        //     Configuration.saveStream(configData.currentStream).then( function(res) {
        //         configData.isNew = false;
        //         Configuration.getStreams().then( function(res) {
        //             configData.data.configStreams = res.data;
        //         });
        //     });
        // };


        // detect context change and broadcast the event to adjust the current primitive
        $scope.$watch( function () {
            return configData.curTab;
        }, function (newValue) {   
            console.log('new value', newValue);
        });
    }

    // The base controller loads the entire context of the project configuration.
    // The base controller variable is loaded into each type of category.

    // ----- controllerFunction -----
    controllerConfigManageElement.$inject = ['$scope', 'Configuration', 'ProcessCodes'];

    /* @ngInject */
    function controllerConfigManageElement($scope, Configuration, ProcessCodes) {
        var configDataElement = this;

        console.log(ProcessCodes)

        configDataElement.activeRecord = undefined;
        configDataElement.activeRecordNew = false;

        $scope.$watch('config', function(newValue) {
            if (newValue) {
                configDataElement.data = newValue;
            }
        });

        $scope.$watch('context', function(newValue) {
            if (newValue) {
                console.log(newValue);
                configDataElement.context = newValue;
            }
        });


        // ----- New record template -----
        configDataElement.newRecord = function() {
            configDataElement.activeRecordNew = true;

            console.log('config', configDataElement.context);

            Configuration.newConfigItem(configDataElement.context).then( function(res) {
                configDataElement.activeRecord = res.data;
            });

        };

        // ----- Add a new record -----
        configDataElement.addRecord = function() {

            Configuration.addConfigItem(configDataElement.activeRecord, configDataElement.context).then( function(res) {
                configDataElement.activeRecord = res.data;
                configDataElement.msg = 'Record Added';
                configDataElement.activeRecord = undefined;
                configDataElement.activeRecordNew = false; 
                $scope.$emit('refreshConfig');
            });

        };

        // ----- Edit a new record -----
        configDataElement.editRecord = function(selectedRecord) {
            configDataElement.activeRecordOriginal = selectedRecord;
            configDataElement.activeRecord = angular.copy(selectedRecord);
            configDataElement.activeRecordNew = false;
        };

        // ----- Save existing record -----
        configDataElement.saveRecord = function() {

            Configuration.saveConfigItem(configDataElement.activeRecord, configDataElement.context).then( function(res) {
                configDataElement.msg = 'Record Saved';
                configDataElement.activeRecord = undefined;
                _.assign(configDataElement.activeRecordOriginal, configDataElement.activeRecord);
                $scope.$emit('refreshConfig');
            });

        };

        // ----- Cancel a record -----
        configDataElement.cancelRecord = function() {
            configDataElement.activeRecordOriginal = undefined;
            configDataElement.activeRecord = undefined;
            configDataElement.activeRecordNew = false;
        };

    }


})();

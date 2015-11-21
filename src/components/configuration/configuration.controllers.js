(function () {

    'use strict';

    angular.module('app.configuration')
        .controller('controllerConfiguration', controllerConfiguration)
        .controller('controllerConfigManageElement', controllerConfigManageElement);


    // ----- ControllerFunction -----
    controllerConfiguration.$inject = ['$scope', 'Configuration'];
    /* @ngInject */
    function controllerConfiguration($scope, Configuration) {
    	var configData = this;
        // load all configurations
        configData.curTab = undefined;
        configData.currentStream = undefined;
        configData.streams = undefined;
        configData.isNew = false;

        
        // Retrieve streams for selection.
        Configuration.getStreams().then( function(res) {
            configData.configStreams = res.data;
        });



        configData.createStream = function() {
            Configuration.newStream().then( function(res) {
                configData.currentStream = res.data;
                configData.isNew = true;
                console.log('stream', configData.currentStream);
            });
        }

        // set the stream to edit on all other pages.
        configData.selectStream = function(stream) {
            configData.data.currentStream = stream;
        }

        // ----- Add a new record -----
        configData.addStream = function() {
            Configuration.addStream(configData.currentStream).then( function(res) {
                configData.isNew = false;
                Configuration.getStreams().then( function(res) {
                    configData.data.configStreams = res.data;
                });
            });
        };

        // ----- Save existing record -----
        configData.saveStream = function() {
            Configuration.saveStream(configData.currentStream).then( function(res) {
                configData.isNew = false;
                Configuration.getStreams().then( function(res) {
                    configData.data.configStreams = res.data;
                });
            });
        };


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
    controllerConfigManageElement.$inject = ['$scope', 'Configuration'];

    /* @ngInject */
    function controllerConfigManageElement($scope, Configuration) {
        var configDataElement = this;

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
            switch(configDataElement.context) {
                case 'activities':
                    Configuration.newActivity().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                case 'buckets':
                    Configuration.newBucket().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                case 'milestones':
                    Configuration.newMilestone().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                case 'phases':
                    Configuration.newPhase().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                case 'requirements':
                    Configuration.newRequirement().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                case 'tasks':
                    Configuration.newTask().then( function(res) {
                        configDataElement.activeRecord = res.data;
                    });
                    break;
                };
        };

        // ----- Add a new record -----
        configDataElement.addRecord = function() {
            console.log('here', configDataElement.data[configDataElement.context], configDataElement.activeRecord);
            configDataElement.data[configDataElement.context].push( angular.copy( configDataElement.activeRecord ));
            configDataElement.msg = 'Record Added';
            configDataElement.activeRecord = undefined;
            configDataElement.activeRecordNew = false;
        };

        // ----- Edit a new record -----
        configDataElement.editRecord = function(selectedRecord) {
            configDataElement.activeRecordOriginal = selectedRecord;
            configDataElement.activeRecord = angular.copy(selectedRecord);
            configDataElement.activeRecordNew = false;
        };

        // ----- Save existing record -----
        configDataElement.saveRecord = function() {
            _.assign(configDataElement.activeRecordOriginal, configDataElement.activeRecord);
            configDataElement.msg = 'Record Saved';
            configDataElement.activeRecord = undefined;
        };

        // ----- Cancel a record -----
        configDataElement.cancelRecord = function() {
            configDataElement.activeRecordOriginal = undefined;
            configDataElement.activeRecord = undefined;
            configDataElement.activeRecordNew = false;
        };

    }


})();

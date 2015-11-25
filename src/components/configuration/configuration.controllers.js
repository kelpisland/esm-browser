(function () {

    'use strict';

    angular.module('app.configuration')
        .controller('controllerConfiguration', controllerConfiguration)
        .controller('controllerConfigStream', controllerConfigStream)
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
            
            // get streams too
            Configuration.getStreams().then( function(res) {
                configData.config.streams = res.data;
                console.log(res.data);
            });
        });

        
        $rootScope.$on('refreshConfig', function() { 
            Configuration.getConfig().then( function(res) {
                configData.config = res.data;
                // get streams too
                Configuration.getStreams().then( function(res) {
                    configData.config.streams = res.data;
                });
            });

        });


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
        // $scope.$watch( function () {
        //     return configData.curTab;
        // }, function (newValue) {   
        //     console.log('new value', newValue);
        // });
    }


    // // ----- ControllerFunction -----
    // controllerConfigStream.$inject = ['$rootScope', '$scope', 'Configuration'];
    // /* @ngInject */
    // function controllerConfigStream($rootScope, $scope, Configuration) {
    //     var configDataStream = this;
    //     // load all configurations
    //     configDataStream.data = undefined;
    //     configDataStream.config = undefined;

    //     Configuration.getStreams().then( function(res) {

    //     });

    //     $scope.$watch('config', function(newValue) {
    //         if (newValue) {
    //             configDataElement.data = newValue;
    //         }
    //     });
    // }




    // ----- ControllerFunction -----
    controllerConfigStream.$inject = ['$rootScope', '$scope', 'Configuration'];
    /* @ngInject */
    function controllerConfigStream($rootScope, $scope, Configuration) {
        var configStream = this;
        // load all configurations
        configStream.config = undefined;
        configStream.newItems = {phases: {}};

        $scope.$watch('config', function(newValue) {
            if (newValue) {
                configStream.data = newValue;
            }
        });

        $scope.$watch('stream', function(newValue) {
            if (newValue) {
                configStream.activeRecord = newValue;
            }
        });

        configStream.addPhases = function() {
            if (!configStream.newItems.phases) {
                configStream.newItems.phases = {};
            }

            // add a holder for each milestone and activity
            _.each(configStream.activeRecord.phases, function(phase) {
                // if( !configStream.newItems.phases[phase._id] ) {
                //     configStream.newItems.phases[phase._id] = {};
                // }

                // configStream.newItems.phases[phase._id].milestones = [];
                // configStream.newItems.phases[phase._id].activities = [];

                phase.stream = configStream.activeRecord._id;

                Configuration.addPhaseToStream(configStream.activeRecord, phase).then( function(res) {
                    phase = res.data;
                });

            });

            console.log(configStream.newItems);
        }

        // flatten the milestones and fill in the related phase for each.
        configStream.milestonesToPhase = function() {
            _.each(configStream.newItems.phases, function(phase, idx) {
                _.each(phase.milestones, function(milestone) {
                    milestone.phase = idx;
                    configStream.activeRecord.milestones.push(milestone);
                });
            });
        };

        // flatten the milestones and fill in the related phase for each.
        configStream.activitiesToPhase = function() {
            _.each(configStream.newItems.phases, function(phase, idx) {
                _.each(phase.activities, function(activity, idx2) {
                    activity.phase = idx;
                    configStream.activeRecord.activities.push(activity);

                    // set up the tasks
                    configStream.newItems.phases[idx].activities[idx2].tasks = [];
                });
            });
            console.log(configStream.activeRecord.activities);
        };

        // flatten the activities and fill in the related task for each.
        configStream.tasksToActivities = function() {
            _.each(configStream.newItems.activities, function(activity, idx) {
                _.each(activity.tasks, function(task) {
                    task.activity = idx;
                    configStream.activeRecord.tasks.push(task);
                });
            });
            console.log('tasks', configStream.activeRecord.tasks);
        };


    }


    // The base controller loads the entire context of the project configuration.
    // The base controller variable is loaded into each type of category.

    // ----- controllerFunction -----
    controllerConfigManageElement.$inject = ['$scope', 'Configuration', 'ProcessCodes', '$filter'];

    /* @ngInject */
    function controllerConfigManageElement($scope, Configuration, ProcessCodes, $filter) {
        var configDataElement = this;

        // for the task process code dropdown
        configDataElement.processCodes = ProcessCodes;

        configDataElement.activeRecord = undefined;
        configDataElement.activeRecordNew = false;

        $scope.$watch('config', function(newValue) {
            if (newValue) {
                configDataElement.data = newValue;
                console.log('data', configDataElement.data);
            }
        });

        $scope.$watch('context', function(newValue) {
            if (newValue) {
                configDataElement.context = newValue;
            }
        });


        // ----- New record template -----
        configDataElement.newRecord = function() {
            configDataElement.activeRecordNew = true;

            console.log('config', configDataElement.context);

            Configuration.newConfigItem(configDataElement.context).then( function(res) {
                configDataElement.activeRecord = res.data;
                console.log(res.data);
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
            configDataElement.msg = '';
            configDataElement.activeRecordOriginal = selectedRecord;

            Configuration.newConfigItem(configDataElement.context).then( function(res) {
                configDataElement.activeRecord = _.assign(res.data, selectedRecord);
                console.log(configDataElement.activeRecord);
            });

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
            configDataElement.msg = '';
            configDataElement.activeRecordOriginal = undefined;
            configDataElement.activeRecord = undefined;
            configDataElement.activeRecordNew = false;
        };

        configDataElement.kebabNameToCode = function() {
            if (configDataElement.activeRecord.name && (configDataElement.activeRecord.code === '' || configDataElement.activeRecord.code === 'code')) {
                configDataElement.activeRecord.code = $filter('kebab')(configDataElement.activeRecord.name);
            }
        };

    }


})();

(function () {

    'use strict';

    angular.module('app.documents')
        .controller('controllerDocumentUploadGeneral', controllerDocumentUploadGeneral)
		.controller('controllerModalDocumentViewer', controllerModalDocumentViewer);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Document Upload General
	//
    // -----------------------------------------------------------------------------------
    controllerDocumentUploadGeneral.$inject = ['$scope', 'Upload', '$timeout', 'API'];
    /* @ngInject */
    function controllerDocumentUploadGeneral($scope, Upload, $timeout, API) {
		var dug = this;
		
		$scope.$watch('files', function () {
			dug.upload($scope.files);
		});
		$scope.$watch('file', function () {
			if (dug.file != null) {
				dug.upload([dug.file]);
			}
		});
		dug.log = '';

		dug.upload = function (files) {
			if (files && files.length) {
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					if (!file.$error) {
						Upload.upload({
							url: API,
							fields: {
								//	'username': $scope.username
							},
                			file: file
        				}).progress(function (evt) {
                			var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                			dug.log = 'progress: ' + progressPercentage + '% ' + evt.config.file.name + '\n' + dug.log;
						}).success(function (data, status, headers, config) {
							dug.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + dug.log;
						});
					}
				}
			}
        }
    }

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Modal: View Documents Comment
	//
    // -----------------------------------------------------------------------------------
    controllerModalDocumentViewer.$inject = ['$modalInstance'];
    //
    function controllerModalDocumentViewer($modalInstance) { 
		var md = this;
		md.ok = function () { $modalInstance.close(); };
		md.cancel = function () { $modalInstance.dismiss('cancel'); };
	};


})();

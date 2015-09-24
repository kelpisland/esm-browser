(function () {

    'use strict';

    angular.module('app.documents')
        .directive('tmplDocumentsUploadGeneral', directiveDocumentsUploadGeneral)
        .directive('modalDocumentViewer', directiveModalDocumentViewer);

    // -----------------------------------------------------------------------------------
	//
	// CONTROLLER: Document Upload General
	//
    // -----------------------------------------------------------------------------------
    function directiveDocumentsUploadGeneral() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/documents/partials/document-upload-general.html',
            scope: {
            },
            controller: 'controllerDocumentUploadGeneral',
            controllerAs: 'dug'
        };

        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal document viewer
	//
    // -----------------------------------------------------------------------------------
    directiveModalDocumentViewer.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalDocumentViewer($modal) {
        var directive = {
            restrict:'A',
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/documents/partials/modal_document_viewer.html',
						controller: 'controllerModalDocumentViewer',
						controllerAs: 'md',
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
})();

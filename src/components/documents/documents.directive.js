(function () {

    'use strict';

    angular.module('app.documents')
        .directive('tmplDocumentsUploadGeneral', directiveDocumentsUploadGeneral)
        .directive('tmplDocumentsList', directiveDocumentsList)        
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
	// CONTROLLER: Document List Table
	//
    // -----------------------------------------------------------------------------------
    function directiveDocumentsList() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/documents/partials/document-list.html',
            controller: 'controllerDocumentList',
            controllerAs: 'docList',
            scope: {
				documents: '=',
				filterBy: '='
            }
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

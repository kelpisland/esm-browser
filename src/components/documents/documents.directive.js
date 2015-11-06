(function () {

    'use strict';

    angular.module('app.documents')
        .directive('tmplDocumentsUploadGeneral', directiveDocumentsUploadGeneral)
        .directive('tmplDocumentsList', directiveDocumentsList)        
        .directive('modalDocumentViewer', directiveModalDocumentViewer)
        .directive('modalDocumentBuckets', directiveModalDocumentBuckets);

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
                project: '='
            },
            controller: 'controllerDocumentUploadGeneral',
            controllerAs: 'docUpload'
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
    // -----------------------------------------------------------------------------------
    //
    // DIRECTIVE: Modal document Tags
    //
    // -----------------------------------------------------------------------------------
    directiveModalDocumentBuckets.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalDocumentBuckets($modal) {
        var directive = {
            restrict:'A',
            scope: {
                doc: '=',
                project: '='
            }
            link : function(scope, element, attrs) {
                element.on('click', function() {
                    var modalDocBuckets = $modal.open({
                        animation: true,
                        templateUrl: 'components/documents/partials/modal_document_buckets.html',
                        controller: 'controllerModalDocumentBuckets',
                        controllerAs: 'docBuckets',
                        size: 'md',
                        resolve: {
                            rDoc: function() { return scope.doc },
                            rProject: function() { return scope.project }
                        }
                    });
                    modalDocBuckets.result.then(function (data) {
                        console.log('data', data)
                        scope.doc = data;
                    }, function () {});
                });
            }
        };
        return directive;
    }    
})();

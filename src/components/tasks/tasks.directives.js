(function () {

    'use strict';

    angular.module('app.tasks')
    	.directive('tmplLoadTask', directiveLoadTask);
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: expand panel
	//
    // -----------------------------------------------------------------------------------
    directiveLoadTask.$inject = ['$compile'];
    /* @ngInject */
    function directiveLoadTask($compile) {
		var directive = {
			restrict: 'E',
			scope: {
				task: '='
			},
			link: function link(scope, element, attrs) {
				// each directive receives: 
				// anchor: the key used to identify the item / panel type to cross reference the process data.
				// itemId: the id used to get more info about the item via a service.
				if (scope.task.tmpl) {
					var tmpl = $compile('<' + scope.task.tmpl + ' x-anchor="' + scope.task.anchor + '" x-item="' + scope.task.itemId + '"></' + scope.task.tmpl + '>')(scope);	
					element.replaceWith(tmpl);
				}
			}
		};
		return directive;
	};
    
})();
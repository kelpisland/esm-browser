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
				scope.$watch('task', function(newValue) { 
					if (newValue) {
						console.log('merge', newValue);
						// scope task should be bound to the task menu
						var tmpl = '<' + newValue.tmpl + ' x-anchor="' + newValue.anchor + '" x-item="task"></' + newValue.tmpl + '>';
						var ctmpl = $compile(tmpl)(scope);	
						console.log(tmpl,ctmpl);						
						element.replaceWith(ctmpl);
					}
				});
			}
		};
		return directive;
	};
    
})();
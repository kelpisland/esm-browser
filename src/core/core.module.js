(function() {
    'use strict';

    angular.module('app.core', [
        // Angular modules (ngAnimate 1.4.x is not compatible with ui.bootstrap 0.13.0)
        /* 'ngAnimate', */ 'ngSanitize',

        // Our reusable framework
        'fw.exception', 'fw.logger',

        // 3rd Party modules
        'toastr', 'ui.bootstrap', 'ui.router', 'ngMap', 'd3', 'angularMoment', 'ngFileUpload'
    ]);
    
	angular.module('d3', [])
	.factory('d3Service', ['$document', '$q', '$rootScope',
		function($document, $q, $rootScope) {
			var d = $q.defer();
			function onScriptLoad() {
				// Load client in the browser
				$rootScope.$apply(function() { d.resolve(window.d3); });
			}
			// Create a script tag with d3 as the source
			// and call our onScriptLoad callback when it
			// has been loaded
			var scriptTag = $document[0].createElement('script');
			scriptTag.type = 'text/javascript'; 
			scriptTag.async = true;
			scriptTag.src = 'http://d3js.org/d3.v3.min.js';
			scriptTag.onreadystatechange = function () {
				if (this.readyState == 'complete') onScriptLoad();
			};
			scriptTag.onload = onScriptLoad;

			var s = $document[0].getElementsByTagName('body')[0];
			s.appendChild(scriptTag);

			return {
				d3: function() { return d.promise; }
			};
		}
	]);
    
})();

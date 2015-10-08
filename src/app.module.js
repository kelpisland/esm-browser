(function() {
    'use strict';

    angular.module('app', [
    	
        // Common (everybody has access to these)
        'app.core',
		
        // Features (listed alphabetically)
        'app.activity',
        'app.approot',
        'app.auth',

        'app.default',
        'app.documents',
        'app.project',
        'app.projects',

        'app.topnav',
        
        'app.tasks',
        
        'app.users',
        'app.utils'
    ]);
})();

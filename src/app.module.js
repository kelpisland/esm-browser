(function() {
    'use strict';

    angular.module('app', [
    	
        // Common (everybody has access to these)
        'app.core',
		
        // Features (listed alphabetically)
        'app.alerts',
        'app.activity',
        'app.approot',
        'app.auth',

        'app.default',
        'app.documents',

        'app.maps',
        
        'app.project',
        'app.projects',

        'app.topnav',
        
        'app.tasks',
        
        'app.users',
        'app.utils'
    ]);
})();

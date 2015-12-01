/* global _ */

(function() {
    'use strict';

    var apiPath = 'http://' + window.location.hostname + ':7203/api';
    var apiServerPath = 'http://159.203.17.90:3000/api';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('API',  apiPath)
        .constant('SERVERAPI',  apiServerPath)
        .constant('PROVINCES', 
            {
                'ab': 'Alberta',
                'bc': 'British Columbia',
                'mb': 'Manitoba',
                'nb': 'New Brunswick',
                'nl': 'Newfoundland and Labrador',
                'ns': 'Nova Scotia',
                'on': 'Ontario',
                'pe': 'Prince Edward Island',
                'qc': 'Quebec',
                'sk': 'Saskatchewan',
                'nt': 'Northwest Territories',
                'nu': 'Nunavut',
                'yt': 'Yukon'
            }
        )
        .constant('REGIONS', 
            {
                'cariboo': 'Cariboo',
                'kootenay': 'Kootenay',
                'lowermainland': 'Lower Mainland',
                'okanagan': 'Okanagan',
                'omnieca': 'Omineca',
                'peace': 'Peace',
                'skeena': 'Skeena',
                'thompson': 'Thompson',
                'vancouverisland': 'Vancouver Island'
            }
        ) 
        .constant('TASKSTATUS',
            [
                'Not Required',
                'Not Started',
                'In Progress',
                'Complete'
            ]
        )
        .value('Global', {
			user:{name:{}, _id:undefined},
			public: true
		})
        .value('ProcessCodes', []);        
})();

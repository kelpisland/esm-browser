/* global _ */

(function() {
    'use strict';

    var apiPath = 'http://' + window.location.hostname + ':7203/api';
    var apiServerPath = 'http://159.203.17.90:3000/esm';    

    console.debug("API Path is " + apiPath);

    angular
        .module('app.core')
        .constant('_', _)
        .constant('API',  apiPath)
        .constant('SERVERAPI',  apiServerPath)

        .value('Global', {
			user:{name:{}, _id:undefined},
			public: true
		});

})();

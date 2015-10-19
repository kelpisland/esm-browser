/* global _ */

(function() {
    'use strict';

    var apiPath = 'http://' + window.location.hostname + ':7203/api';

    console.debug("API Path is " + apiPath);

    angular
        .module('app.core')
        .constant('_', _)
        .constant('API',  apiPath)
        .value('Global', {
			user:{name:{}, _id:undefined},
			public: true
		});

})();

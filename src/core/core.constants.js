/* global _ */

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('API', 'http://localhost:7203/api');
})();

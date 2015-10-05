(function () {

    'use strict';

    angular.module('app.utils')
        .filter('projectStageContributor', filterProjectStageContributor);
        
    // -----------------------------------------------------------------------------------
	//
	// FILTER: Projects Stages - mark up the project to show what group owns it.
	//
    // -----------------------------------------------------------------------------------
    filterProjectStageContributor.$inject = ['Global', '$filter', '_'];
    /* @ngInject */
    function filterProjectStageContributor(Global, $filter, _) {
		return function(input) {
			var cur = _.findWhere(Global.projectStages, {name: input});
			if (cur) {
				if (cur.groups.indexOf( Global.user.type ) !== -1) {
					return true;
				}
			} 
			return false;
		}
    }

})();
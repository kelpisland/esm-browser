(function () {

    'use strict';

    angular.module('app.utils')
        .filter('projectStageContributor', filterProjectStageContributor)
        .filter('kebab', filterKebab)
		.filter('contains', filterContains)
		.filter('projectBucketNotComplete', filterProjectBucketNotComplete);
        
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
    // -----------------------------------------------------------------------------------
	//
	// FILTER: Projects Stages - mark up the project to show what group owns it.
	//
    // -----------------------------------------------------------------------------------
    filterKebab.$inject = [];
    /* @ngInject */
    function filterKebab() {
		return function(input) {
			return _.kebabCase(input);
		}
    }
    // -----------------------------------------------------------------------------------
	//
	// FILTER: Contains - Retuns true or false if string is in.
	//
    // -----------------------------------------------------------------------------------
    filterContains.$inject = [];
    /* @ngInject */
    function filterContains() {
		return function(input, term) {
			return (_.indexOf(input, term) > -1);
		}
    }
    // -----------------------------------------------------------------------------------
	//
	// FILTER: Project Buckets - not complete
	//
    // -----------------------------------------------------------------------------------
    filterProjectBucketNotComplete.$inject = [];
    /* @ngInject */
    function filterProjectBucketNotComplete() {
		return function(input) {
			var output = [];
			_.each(input, function(item) {
				if (item.progress < 100) {
					output.push(item);
				}
			});
			return output;
		}
    }
    
})();
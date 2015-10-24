(function () {

    'use strict';

    angular.module('app.utils')
        .directive('tmplQuickLinks', directiveQuickLinks)
        .directive('tmplRecentActivity', directiveRecentNews)
        .directive('modalAddPublicComment', directiveModalAddPublicComment)
        .directive('centerVertical', directiveCenterVertical)
        .directive('countdownClock',directiveCountdownClock)
        .directive('panelSort',directivePanelSort)
        .directive('phaseColour',directivePhaseColour)
        .directive('isCurrentUser', directiveIsCurrentUser)
        .directive('expandPanel', directiveExpandPanel)
        .directive('modalResearchDetail', directiveModalResearchDetail)
        .directive('goToElement', directiveGoToElement)
        .directive('dynamicClass', directiveDynamicClass)
        .directive('dateField', directiveDateField)
        .directive('rolesSelect', directiveRolesSelect)
        .directive('usersSelect', directiveUsersSelect);
        
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Quicklinks
	//
    // -----------------------------------------------------------------------------------
    directiveQuickLinks.$inject = [];
    /* @ngInject */
    function directiveQuickLinks() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/utils/partials/quick-links.html',
            controller: 'controllerQuickLinks',
            controllerAs: 'qlPanel'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Recent News
	//
    // -----------------------------------------------------------------------------------
    directiveRecentNews.$inject = [];
    /* @ngInject */
    function directiveRecentNews() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/utils/partials/recent-activity.html',
            controller: 'controllerRecentActivity',
            controllerAs: 'raPanel'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Modal add public comment
	//
    // -----------------------------------------------------------------------------------
    directiveModalAddPublicComment.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalAddPublicComment($modal) {
        var directive = {
            restrict:'A',
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalAddComment = $modal.open({
						animation: true,
						templateUrl: 'components/utils/partials/modal-add-public-comment.html',
						controller: 'controllerModalAddComment',
						controllerAs: 'md',
						size: 'md'
					});
					modalAddComment.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Center Vertical
	//
    // -----------------------------------------------------------------------------------
    directiveCenterVertical.$inject = ['$window'];
    /* @ngInject */
    function directiveCenterVertical($window) {
		var directive = {
            restrict:'A',
			link :  function (scope, element, attr) {

				var w = angular.element($window);
				var box = angular.element(element);
				
				scope.$watch(function () {
					return {
						'h': window.innerHeight, 
						'w': window.innerWidth,
						'bh': box[0].offsetHeight
					};
				}, function (newValue, oldValue) {
					var bh = box[0].offsetHeight
					box.css({'margin-top': parseInt((newValue.h - bh)/2) + 'px'});
				}, true);

				w.bind('resize', function () {
					scope.$apply();
				});
			}
		}
		return directive;
	}
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Countdown clock
	//
    // -----------------------------------------------------------------------------------
    directiveCountdownClock.$inject = ['moment', '$interval'];
    /* @ngInject */
    function directiveCountdownClock(moment, $interval) {
	    var localFormat = 'YYYY-MM-DD[T]HH:mm:ss';
		var directive = {
			restrict: 'E',
			scope: {
				end: '='
			},
			replace: true,
			template: '<div class="countdown-wrapper"></div>',
			link: function link(scope, element, attrs) {
				var timeoutId;

				function updateTime(seed) {
					var countDown = moment.preciseDiff(
										moment(scope.end).format(localFormat),
										moment().format(localFormat)
									);
					
					if (countDown) {
						angular.element(element).html(countDown);
					}
				}

				scope.$watch(attrs.start, function(seed) {
					updateTime(seed);
				});

				element.on('$destroy', function() {
					$interval.cancel(timeoutId);
				});

				// start the UI update process; save the timeoutId for canceling
				timeoutId = $interval(function() {
					updateTime(); // update DOM
				}, 1000);
			}
		};
		return directive;
	};
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Panel Sort
	// x-fields: list of fields to sort by.
	// x-data: data to be sorted.
	//
    // -----------------------------------------------------------------------------------
    directivePanelSort.$inject = [];
    /* @ngInject */
    function directivePanelSort() {
        var directive = {
            restrict: 'E',
            scope: {
            	fields: '=',
            	data: '='
            },
            templateUrl: 'components/utils/partials/panel-sort.html',
            controller: 'controllerPanelSort',
            controllerAs: 'panelSort'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Coloured Phase
	// if the Phase is assigned to you, the Phase name is green.
	// if the Phase is not assigned to you, the Phase name is blue.
	//
    // -----------------------------------------------------------------------------------
    directivePhaseColour.$inject = ['$filter'];
    /* @ngInject */
    function directivePhaseColour($filter) {
		var directive = {
			restrict: 'A',
			scope: {
				Phase: '='
			},
			link: function link(scope, element, attrs) {
			
				scope.$watch('Phase', function(newValue) {
					if (newValue) {
						var mine = $filter('projectPhaseContributor')(newValue);
						
						if (mine) {
							angular.element(element).addClass('text-success');
						} else {
							angular.element(element).addClass('text-primary');				
						}
					}
				});
			}
		};
		return directive;
	};
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Is Current User  - Similar to Coloured Phase
	// if the Phase is assigned to you, the Phase name is green.
	// if the Phase is not assigned to you, the Phase name is blue.
	//
    // -----------------------------------------------------------------------------------
    directiveIsCurrentUser.$inject = ['Global'];
    /* @ngInject */
    function directiveIsCurrentUser(Global) {
		var directive = {
			restrict: 'A',
			scope: {
				user: '='
			},
			link: function link(scope, element, attrs) {
			
				scope.$watch('user', function(newValue) {
					if (newValue) {
						if (newValue === Global.user.type) {
							angular.element(element).addClass('label-success');
						} else {
							angular.element(element).addClass('label-info');				
						}
					}
				});
			}
		};
		return directive;
	};
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: expand panel
	//
    // -----------------------------------------------------------------------------------
    directiveExpandPanel.$inject = ['$compile'];
    /* @ngInject */
    function directiveExpandPanel($compile) {
		var directive = {
			restrict: 'A',
			link: function link(scope, element, attrs) {
				if (attrs.expandPanel) {
					var tmpl = $compile('<a class="panel-toggle" ng-click="' + attrs.expandPanel + ' = !' + attrs.expandPanel + '"><i ng-if="!' + attrs.expandPanel + '" class="glyphicon glyphicon-plus-sign"></i><i ng-if="' + attrs.expandPanel + '" class="glyphicon glyphicon-minus-sign"></i></a>')(scope);	
					element.append(tmpl);
				}
			}
		};
		return directive;
	};
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Research Detail
	//
    // -----------------------------------------------------------------------------------
    directiveModalResearchDetail.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalResearchDetail($modal) {
        var directive = {
            restrict:'A',
            scope : {
            	seed: '=',
            	term: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/utils/partials/modal-research-detail.html',
						controller: 'controllerModalResearchDetail',
						controllerAs: 'rd',
						scope: scope,
						size: 'lg'
					});
					modalDocView.result.then(function () {}, function () {});
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Role Select
	//
    // -----------------------------------------------------------------------------------
    directiveRolesSelect.$inject = [];
    /* @ngInject */
    function directiveRolesSelect() {
        var directive = {
            restrict:'E',
            scope : {
            	selectedRoles: '='
            },
            templateUrl: 'components/utils/partials/roles-select.html',
			controller: 'controllerRolesSelect',
			controllerAs: 'utilRolesSelect',
			link: function(scope, element, attrs) {
				element.addClass('btn-list')
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Users Select
	//
    // -----------------------------------------------------------------------------------
    directiveUsersSelect.$inject = [];
    /* @ngInject */
    function directiveUsersSelect() {
        var directive = {
            restrict:'E',
            scope : {
            	selectedUsers: '='
            },
            templateUrl: 'components/utils/partials/users-select.html',
			controller: 'controllerUsersSelect',
			controllerAs: 'utilUsersSelect'
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Research Detail
	//
    // -----------------------------------------------------------------------------------
    directiveGoToElement.$inject = [];
    /* @ngInject */
    function directiveGoToElement() {
        var directive = {
            restrict:'A',
            scope : {
            	goToProject: '=',
            	goToId: '=',
            	goToType: '='
            },
			link : function(scope, element, attrs) {
				element.on('click', function() {
					// user is EAO
					$state.go('eao.project', {'id': scope.goToProject} );
				});
			}
        };
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Dynamic Class
	//
    // -----------------------------------------------------------------------------------
    directiveDynamicClass.$inject = ['$compile'];
    /* @ngInject */
    function directiveDynamicClass($compile) {
        var directive = {
			scope: {
				dynamicClassWhen: '=',
				dynamicClass: '@'
			},
			link: function(scope, elt, attrs) {
				scope.$watch('dynamicClassWhen', function(val) {
					if (val) {
						elt.addClass(scope.dynamicClass);
						$compile(elt)(scope);
					}
				});
			}
		};
        return directive;
    }
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Date Field
	//
    // -----------------------------------------------------------------------------------
	directiveDateField.$inject = ['moment'];
    /* @ngInject */
    function directiveDateField(moment) {
		var directive = {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attr, ngModel) {

				ngModel.$formatters.push(function(value){
					return moment(value).toDate();
				});

// 				ngModel.$parsers.push(function(value){
// 
// 				});

			}
		};
		return directive;
	}
})();
(function () {

    'use strict';

    angular.module('app.utils')
        .directive('tmplQuickLinks', directiveQuickLinks)
        .directive('tmplRecentActivity', directiveRecentNews)
        .directive('modalAddPublicComment', directiveModalAddPublicComment)
        .directive('modalDocumentViewer', directiveModalDocumentViewer)
        .directive('centerVertical', directiveCenterVertical)
        .directive('countdownClock',directiveCountdownClock);
        
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
						templateUrl: 'components/utils/partials/modal_add_public_comment.html',
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
	// DIRECTIVE: Modal document viewer
	//
    // -----------------------------------------------------------------------------------
    directiveModalDocumentViewer.$inject = ['$modal'];
    /* @ngInject */
    function directiveModalDocumentViewer($modal) {
        var directive = {
            restrict:'A',
			link : function(scope, element, attrs) {
				element.on('click', function() {
					var modalDocView = $modal.open({
						animation: true,
						templateUrl: 'components/utils/partials/modal_document_viewer.html',
						controller: 'controllerModalDocumentViewer',
						controllerAs: 'md',
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

				// show midway point message
				// if first deployment, award badge

			}
		};
		return directive;
	};




})();
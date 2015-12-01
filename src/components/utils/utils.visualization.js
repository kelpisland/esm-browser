(function () {

    'use strict';

    angular.module('app.utils')
        .directive('tmplProgressBar', directiveProgressBar)
        .directive('tmplProgressCircle', directiveProgressCircle);

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Progress Bar
	//
    // -----------------------------------------------------------------------------------
    directiveProgressBar.$inject = ['$compile'];
    /* @ngInject */
    function directiveProgressBar($compile) {
        var directive = {
            restrict: 'E',
			scope: {
				percentage: '='
			},
			link: function(scope, element, attrs) {
				scope.$watch('percentage', function(newValue) {
					if (newValue !== undefined) {
						console.log(newValue, scope.percentage);
						var el = $compile('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" style="width: ' + newValue + '%;">Est. ' + newValue + '%</div></div>')(scope);
						element.replaceWith(el);
					}
				});
			}
		}
		return directive;
	}
	// -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Progress Circle
	//
    // -----------------------------------------------------------------------------------
    directiveProgressCircle.$inject = ['d3Service', '$window'];
    /* @ngInject */
    function directiveProgressCircle(d3Service, $window) {
        var directive = {
            restrict: 'E',
            replace: true,
			scope: {
				percentage: '=',
				subtext: '@',
				maxWidth: '@',
				instance: '='
			},
			template: '<svg class="d3-progress-circle" id="svg-completeness-{{ inst }}"></svg>',
			link: function (scope, element, attrs) {

				scope.$watch('instance', function(newValue) {
					scope.inst = newValue;
				});

				if (!scope.completeness) scope.completeness = 40;

				d3Service.d3().then(function(d3) {
				
				
					// -----------------------------------------------------------------------------------
					//
					// D3: PIE Code
					//
					// -----------------------------------------------------------------------------------
					
					var scale = d3.scale.linear().domain([0,100]).range([0, 2 * Math.PI]);
					
					var pie = function(fwdth) {
						var frad = parseInt(fwdth/2);
						return d3.svg.arc()
							.innerRadius(frad - fwdth)
							.outerRadius(frad)
							.startAngle(function (d) {
								return scale(d[0]);
							})
							.endAngle(function (d) {
								return scale(d[1]);
							});					
					};
					
					var arc = function (elem, id, options, data) {
						//
						// ensure no surprises
						//
						var opts = _.extend ({
							radius: 45,
							width: 90,
							centre: [200,200],
							colour: '#AA8888',
							start: 0,
							end: 50,
						}, options);
						//
						// set the scale to be used for all measurements
						//
						
						//
						// make the centre string for translation
						//
						var centre = 'translate('+opts.centre.join()+')';
						//
						// select the initial svg element as passed in
						//
						console.log(elem);
						var vis = d3.select(elem)
							//responsive SVG needs these 2 attributes and no width and height attr
							.attr('preserveAspectRatio', 'xMinYMin meet')
							.attr('perc', ''+ scope.completeness)
							.attr('caption', scope.subtext)
							//class to make it responsive
							.classed("svg-content-responsive", true); 

									// .attr("width", opts.width)
									// .attr("height", opts.width);

						//
						// this caches the selection to allow for multiple appends
						//
						var enterSelection = vis.selectAll('path')
							.data(data)
							.enter();
						//
						// append the pie arcs showing reality
						//
						enterSelection
							.append('path')
							.attr('id', function (d, i) {
								return id + i;
							})
							.attr('d', pie(opts.width))
							.attr('transform', centre)
							.style('fill', function (d) {
								return d[2];
							});
						
							vis.append("text")
							.attr("class","mainText")
							.attr("text-anchor", "middle")
							.style("font-size","40px")
							.style("font-weight","bold")
							.style("fill","#ffffff")						
							.attr("x", opts.centre[0])
							.attr("y", opts.centre[1])
							.attr("dy", ".35em")
							.text(scope.completeness + '%');

							if (scope.subtext) {
								vis.append("text")
								.attr("class","subText")
								.attr("text-anchor", "middle")
								.style("font-size","10px")
								.style("font-weight","normal")
								.style("fill","#ffffff")						
								.attr("x", opts.centre[0])
								.attr("y", opts.centre[1] +25)
								.attr("dy", ".35em")
								.text(scope.subtext);
							}
						}
					// -----------------------------------------------------------------------------------
					//
					// D3: END PIE Code
					//
					// -----------------------------------------------------------------------------------

					function resize() {

						var box, grw, i;

						var elems = document.getElementsByClassName('d3-progress-circle');

						for(i = 0; i < elems.length; i++) {
							box = angular.element(elems[i]);
							grw = box[0].parentNode;

							console.log(box, grw);

							var bw = grw.offsetWidth-30;
							var bwr = parseInt(bw / 2);

							d3.select(elems[i])
								.attr("width", bw)
								.attr("height", bw);
						
							d3.select(elems[i]).selectAll('path')
								.attr('transform', 'translate(' + bwr + ',' + bwr + ')')
								.attr("d", pie(bw));

							d3.select(elems[i]).selectAll('.mainText')
								.attr('x', bwr)
								.attr('y', bwr);

							d3.select(elems[i]).selectAll('.subText')
								.attr('x', bwr)
								.attr('y', bwr + 25);
						}
					
					}


					//function runFirst(newValue) {

						var box, grw, i, bw;

						//var elems = document.getElementsByClassName('d3-progress-circle');

						// for(i = 0; i < elems.length; i++) {
							// box = angular.element(elems[i]);
							// grw = box[0].parentNode;


						// Get the window and parent elements.				
						var box = angular.element(element);
						var grw = box[0].parentNode;
	 				// 	var bw = grw.offsetWidth-30;
	 						bw = grw.offsetWidth-30;
	 					
		 					if (bw < 0) bw = 0;
		 					
		 					if (scope.maxWidth && scope.maxWidth < bw) {
		 						bw = scope.maxWidth;
		 					}

		 					var bwr = parseInt(bw / 2);
		 					
		 					
							arc (box[0], 'arcs', {
								centre:[bwr,bwr],
								scale:[0,100],
								radius:(bwr),
								width:(bw)
							},[
								[0, scope.completeness, "#5cb85c"],
								[scope.completeness, 100, "#c0c0c0"]
							]);

						//}


					//}

					d3.select(window).on('resize', resize); 

					// scope.$watch('percentage', function(newValue) {
					// 	console.log('done');
					// 	runFirst(newValue);
					// });

				});

			}
		}
		return directive;
    }
})();
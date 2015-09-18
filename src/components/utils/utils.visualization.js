(function () {

    'use strict';

    angular.module('app.utils')
        .directive('tmplProgressCircle', directiveProgressCircle);

    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Quicklinks
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
				subtext: '@'
			},
			template: '<svg id="svg_completeness"></svg>',
			link: function (scope, element, attrs) {
			
				if (!scope.percentage) scope.percentage = 50;

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
					
					var arc = function (tag, id, options, data) {
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
						var vis = d3.select(tag)
									.attr("width", opts.width)
									.attr("height", opts.width);

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
							.attr("id","mainText")
							.attr("text-anchor", "middle")
							.style("font-size","40px")
							.style("font-weight","bold")
							.style("fill","#ffffff")						
							.attr("x", opts.centre[0])
							.attr("y", opts.centre[1])
							.attr("dy", ".35em")
							.text(scope.percentage + '%');

							if (scope.subtext) {
								vis.append("text")
								.attr("id","subText")
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
						var box = angular.element(element);
						var grw = box[0].parentNode;

						var bw = grw.offsetWidth-30;
						var bwr = parseInt(bw / 2);

						d3.select(tag)
							.attr("width", bw)
							.attr("height", bw);
					
						d3.select(tag).selectAll('path')
							.attr('transform', 'translate(' + bwr + ',' + bwr + ')')
							.attr("d", pie(bw));

						d3.select('#mainText')
							.attr('x', bwr)
							.attr('y', bwr);

						d3.select('#subText')
							.attr('x', bwr)
							.attr('y', bwr + 25);
					
					}

					d3.select(window).on('resize', resize); 
					

					// Get the window and parent elements.				
					var box = angular.element(element);
					var grw = box[0].parentNode;
 					var bw = grw.offsetWidth-30;
 					
 					var tag = ('#' + angular.element(element).attr('id'));
 					
 					var bwr = parseInt(bw / 2);
 					
 					
					arc (tag, 'arcs', {
						centre:[bwr,bwr],
						scale:[0,100],
						radius:(bwr),
						width:(bw)
					},[
						[0, scope.percentage, "#5cb85c"],
						[scope.percentage, 100, "#c0c0c0"]
					]); 					

				});

			}
		}
		return directive;
    }
})();
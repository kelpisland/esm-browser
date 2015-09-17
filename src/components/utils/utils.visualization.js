(function () {

    'use strict';

    angular.module('app.utils')
        .directive('tmplProgressCircle', directiveProgressCircle);
    
    
    angular.module('myApp.directives', [])
  .directive('barChart', ['d3Service', function(d3Service) {
    return {
      restrict: 'EA',
      // directive code
    }
  }]);
    
    // -----------------------------------------------------------------------------------
	//
	// DIRECTIVE: Projects Quicklinks
	//
    // -----------------------------------------------------------------------------------
    directiveProgressCircle.$inject = ['d3Service'];
    /* @ngInject */
    function directiveProgressCircle(d3Service) {
        var directive = {
            restrict: 'E',
			replace: true,
			scope: {
				percentage: '=',
				subtext: '@'
			},
			template: '<svg id="svg_completeness" width="200" height="200"></svg>',
			link: function (scope, element, attrs) {
			
				if (!scope.percentage) scope.percentage = 50;
				
				d3Service.d3().then(function(d3) {
			
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
						scale: [0,100]
					}, options);
					//
					// set the scale to be used for all measurements
					//
					var scale = d3.scale.linear().domain(opts.scale).range([0, 2 * Math.PI]);
					//
					// make the centre string for translation
					//
					var centre = 'translate('+opts.centre.join()+')';
					//
					// select the initial svg element as passed in
					//
					var vis = d3.select(tag);
					//
					// this is a set of arcs showing current data
					//
					var pie = d3.svg.arc()
						.innerRadius(opts.radius - opts.width)
						.outerRadius(opts.radius)
						.startAngle(function (d) {
							return scale(d[0]);
						})
						.endAngle(function (d) {
							return scale(d[1]);
						});
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
						.attr('d', pie)
						.attr('transform', centre)
						.style('fill', function (d) {
							return d[2];
						});
						
						vis.append("text")
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
	
				arc (('#' + angular.element(element).attr('id')), 'myarcs2', {
					centre:[100,100],
					scale:[0,100],
					radius:99,
					width:198
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
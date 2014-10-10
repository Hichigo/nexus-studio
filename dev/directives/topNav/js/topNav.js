nexusApp.directive('topNav', function() {
  return {
		restrict: 'E',
    templateUrl: 'dev/directives/topNav/tpl/top-nav.html',
		replace: true,
		controller: function($scope) {
			
		},
		link: function($scope, $el) {
			$el.find('.menu').append('<div class="bar-nav"></div>');
			var bar = $el.find('.menu > .bar-nav'),
					link = $el.find('.menu > a');
			
			$el.find('.menu').on('click', 'a', function() {
				link.removeClass('active-btn');
				$(this).addClass('active-btn');
				var w = $(this).innerWidth(),
						left = $(this).position().left;
				
				bar.css({
					'width': w+'px',
					'left': left+'px'
				});
			});
		}
  };
});
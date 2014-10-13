nexusApp.directive('topNav', ['$location', function($location) {
  return {
		restrict: 'E',
    templateUrl: 'dev/directives/topNav/tpl/top-nav.html',
		replace: true,
		controller: function($scope) {
			
		},
		link: function($scope, $el) {
			var bar = $el.find('.menu > .bar-nav'),
					link = $el.find('.menu > a'),
					url = $location.$$url.slice(1);
			
			setTimeout(function(){
				switch(url) {
					case 'home':
						bar.css({
							'width': link.eq(0).innerWidth()+'px',
							'left': link.eq(0).position().left+'px'
						});
						break;
					case 'site':
						bar.css({
							'width': link.eq(1).innerWidth()+'px',
							'left': link.eq(1).position().left+'px'
						});
						break;
					case '3dgraphic':
						bar.css({
							'width': link.eq(2).innerWidth()+'px',
							'left': link.eq(2).position().left+'px'
						});
						break;
					case 'application':
						bar.css({
							'width': link.eq(3).innerWidth()+'px',
							'left': link.eq(3).position().left+'px'
						});
						break;
					case 'about':
						bar.css({
							'width': link.eq(4).innerWidth()+'px',
							'left': link.eq(4).position().left+'px'
						});
						break;
				}
			},1000);
			
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
}]);
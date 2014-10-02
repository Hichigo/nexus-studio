myApp.directive('myCustomer', function() {
  return {
		restrict: 'E',
    templateUrl: 'directives/text-input/tpl/text-input.html',
		replace: true,
		link: function($scope, element, attrs) {
			element.find('input').on('blur', function() {
				if(element.find('input').val() !== '') {
					element.find('label').addClass('placeholder-focus');
					element.find('input').addClass('text-focus');
				} else {
					element.find('label').removeClass('placeholder-focus');
					element.find('input').removeClass('text-focus');
				}
			});
		}
  };
});
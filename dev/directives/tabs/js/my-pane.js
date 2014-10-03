nexusApp.directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
			replace: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'dev/directives/tabs/tpl/my-pane.html'
    };
  });
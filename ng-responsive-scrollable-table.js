angular.module('ng-responsive-scrollable-table', [])
	.constant('SCROLLABLE_TABLE_CONSTANTS', {
		baseClass: 'ScrollableTable'
	})
  .controller('ScrollableTableController', function($scope, $window, SCROLLABLE_TABLE_CONSTANTS) {
    this.class = SCROLLABLE_TABLE_CONSTANTS.baseClass;
    this.$window = $window;
  })
  .directive('ngResponsiveScrollableTable', function() {
    return {
    	restrict: 'A',
    	controller: 'ScrollableTableController',
      link: function(scope, element, attrs, ctrl){
    		// scrollwrapper
    		var $scrollWrapper = angular.element('<div class="ScrollableTable"></div>');
    		var parent;

      	// wrap table in scrollwrapper and a div
      	element.wrap($scrollWrapper).wrap('<div></div>');

      	parent = element.parent()[0];

        // Check if the element is wider than its parent and thus needs to be scrollable
        if (element[0].clientWidth > parent.clientWidth) {
        	$scrollWrapper.addClass('has-scroll');
        }
        // When the viewport size is changed, check again if the element needs to be scrollable
        angular.element(ctrl.$window).bind('resize orientationchange', function() {
        	if (element[0].clientWidth > parent.clientWidth) {
            $scrollWrapper.addClass('has-scroll');
          } else {
            $scrollWrapper.removeClass('has-scroll');
          }
        });
      }
    };
  });
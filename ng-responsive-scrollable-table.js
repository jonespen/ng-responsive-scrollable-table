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
      template: 'Name: {{customer.name}} Address: {{customer.address}}',
      link: function(scope, element, attrs, ctrl){
    		// scrollwrapper
    		var scrollWrapper = angular.element('<div />', {
            'class': 'ScrollableTable',
            'html': '<div />' // The inner div is needed for styling
        });

      	// wrap table in outer div
      	element.wrap(scrollWrapper);

        // Store a reference to the wrapper element
        element.data('scrollWrapper', scrollWrapper);
        // Move the scrollable element inside the wrapper element
        //element.appendTo(scrollWrapper.find('div'));
        // Check if the element is wider than its parent and thus needs to be scrollable
        if (element[0].clientWidth > element.parent()[0].clientWidth) {
          element.data('scrollWrapper').addClass('has-scroll');
        }
        // When the viewport size is changed, check again if the element needs to be scrollable
        angular.element(ctrl.$window).bind('resize orientationchange', function() {
            if (element.outerWidth() > element.parent().outerWidth()) {
                element.data('scrollWrapper').addClass('has-scroll');
            } else {
                element.data('scrollWrapper').removeClass('has-scroll');
            }
        });
      }
    };
  });
describe('ng responsive scrollable table', function() {
  
  beforeEach(function () {
  	module('ng-responsive-scrollable-table');

    module(function($provide) {
    	var myMock = {
      	innerHeight: 400,
        innerWidth: 500
	    };
	    //$provide.value('$window', myMock);
    });
	});

	describe('directive', function() {
	  var scope, 
	  	$compile,
	  	$window,
	  	table,
	  	markup = [
			  '<table ng-responsive-scrollable-table>',
			  	'<tbody>',
			  		'<tr>',
			  			'<td>Cell 1</td>',
			  			'<td>Cell 2</td>',
			  			'<td>Cell 3</td>',
			  			'<td>Cell 4</td>',
			  			'<td>Cell 5</td>',
			  			'<td>Cell 6</td>',
			  			'<td>Cell 7</td>',
			  			'<td>Cell 8</td>',
			  		'</tr>',
			  	'</tbody>',
			  '</table>'
			  ].join(' ');


	  beforeEach(inject(function (_$rootScope_, _$compile_, _$window_) {
	  	$window = _$window_;
	    scope = _$rootScope_;
	    $compile = _$compile_;

      table = $compile(markup)(scope);
      scope.$digest();
	  }));

	  var getScrollWrapper = function() {
	  	return table.parent().parent();
	  }

		describe('should', function() {

			it('wrap the table in two divs', function() {
				expect(table.parent()[0].tagName).toBe('DIV');
				expect(getScrollWrapper()[0].tagName).toBe('DIV');
			});

			it('outer div should have class', function() {
				expect(getScrollWrapper().hasClass('ScrollableTable')).toBe(true);
			});

			it('add has-scroll when parent size is smaller than table', function() {
				var scrollWrapper = getScrollWrapper();
				console.log(table[0].clientWidth);

				var parent = angular.element('<div></div>')

				scrollWrapper.wrap(parent);

				expect(scrollWrapper.hasClass('has-scroll')).toBe(true);
			});
		});
	});
});
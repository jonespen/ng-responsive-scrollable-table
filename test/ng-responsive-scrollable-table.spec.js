describe('ng responsive scrollable table', function() {
  
  beforeEach(module('ng-responsive-scrollable-table'));

	describe('directive', function() {
	  var scope, 
	  	$compile,
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


	  beforeEach(inject(function (_$rootScope_, _$compile_) {
	    scope = _$rootScope_;
	    $compile = _$compile_;
      table = $compile(markup)(scope);
      scope.$digest();
	  }));

		describe('should', function() {
			it('wrap the table in two divs', function() {
				console.log(table.parent());
				expect(table.parent()[0].tagName).toBe('DIV');
				expect(table.parent().parent()[0].tagName).toBe('DIV');
			});
		});
	});
});
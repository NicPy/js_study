window.onload = function(e) {
	function pow(x, n) {
	  let result = 1;

	  for (let i = 0; i < n; i++) {
	    result *= x;
	  }

	  return result;
	}

	function factor(x) {
		result = 1; 
		for(var i=1; i<=x; i++){
			result *= i;
		}
		return result;
	}

	console.log(factor(4));
	// describe("pow", function() {

 //  function makeTest(x) {
 //    let expected = x * x * x;
    // it(`${x} в степени 3 будет ${expected}`, function() {
 //      assert.equal(pow(x, 3), expected);
 //    });
 //  }

 //  for (let x = 1; x <= 5; x++) {
 //    makeTest(x);
 //  }

	// });

	describe("factor", function(){
		var resulted_obj = {
			1: 1,
			2: 2,
			3: 6,
			4: 24,
			5: 120,
			6: 720,
		};
		function makeTest(x, v) {
			it(`${x}! is ${v}`, function(){
				assert.equal(factor(x), v);
			});
		};
		for(var i in resulted_obj){
			// console.log(i + " : " + resulted_obj[i]);
			makeTest(i, resulted_obj[i])
		}
	});

	mocha.run();
}

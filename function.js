// console.log(12);
function evenify(num){
	var result;
	if(num % 2 == 0){
		// console.log(num, ': is even number');
		// return num;

		result = num;
	}
	else{
		// console.log(num*2, ': is odd number');
		// return num * 2;

		result = num*2;
	}
	// return 5000;
	return result;
	
}

var result = evenify(13);

var square = result* result;
console.log('square', square)
// console.log('result', result);

function evenify_all(nums){

	var even_array = [];

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		// console.log(num*2);
		var result = evenify(num);
		even_array.push(result);

		/**if(num % 2 == 0){
			console.log(num, ': is even number');
		}
		else{
			console.log(num*2, ': is odd number');
		}
			*/
		}
		return even_array;

	}

	var	nums = [32, 35, 65, 76,87, 87];
	var nums_even = evenify_all(nums);
	console.log(nums_even);

/**nums = [32, 35, 65, 76,87, 87];
evenify_all(nums);
*/

// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i];
// 	// console.log(num*2);
// 	evenify(num);

// }

// friends_age = [13, 17, 19, 20, 22];
// for (let i = 0; i < friends_age.length; i++) {
// 	const age = friends_age[i];
// 	// console.log(age);
// 	if(age % 2 == 0){
// 		console.log(age, ': is even number')
// 	}
// 	else{
// 		console.log(age, ': is odd number')
// 	}
// }

friends_age = [13, 17, 19, 20, 22];
// for (let i = 0; i < friends_age.length; i++) {
// 	const age = friends_age[i];
// 	evenify(age);
// }

// evenify_all(friends_age);
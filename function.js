// console.log(12);
/**function evenify(num){
	if(num % 2 == 0){
		console.log(num, ': is even number');
	}
	else{
		console.log(num*2, ': is odd number');
	}
	
}
*/

function evenify_all(nums){
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		// console.log(num*2);
		// evenify(num);
		if(num % 2 == 0){
			console.log(num, ': is even number');
		}
		else{
			console.log(num*2, ': is odd number');
		}
}
}

nums = [32, 35, 65, 76,87, 87];
evenify_all(nums);

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
evenify_all(friends_age);
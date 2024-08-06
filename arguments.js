function addNumbers(num1, num2){
	console.log(arguments);
	return num1 + num2;
}
var result = addNumbers(3, 5, 8, 15);
console.log(result);
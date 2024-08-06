function explain_callback(name, age, task){
	task();
	console.log('hello ', name);
	console.log('your age ', age);
	/**washHand();
	takeshower();*/
	// console.log(task);


}
function washHand(){
	console.log('wash hand with soap');
}
function takeShower(){
	console.log('Take shower')
}
function scrollFacebook(){
	console.log('Scroll facebook but dont like any post')
}
explain_callback('sogir uddin', 17, washHand);
explain_callback('kobir uddin', 13, takeShower);
explain_callback('jogir uddin', 21, scrollFacebook);
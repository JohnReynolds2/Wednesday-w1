//loop 1 to 20
/*
for (i = 1; i <= 20; i++) {
	console.log(i);
}
*/

//loop even numbers 0 - 200
/*
for (i = 0; i <= 200; i += 2) {
	console.log(i);
} 
*/


//Excited Kitten loop
/*
for (i = 0; i <= 20; i ++) {
	console.log("Love me, pet me! HSSSSSS!");
}
*/

//Fizz Buzz

for (i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log("Fizz");
	}
	if (i % 5 === 0) {
		console.log("Buzz");
	}
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	}
	else {
		console.log(i);
	}
}
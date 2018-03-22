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
/*
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
*/

//Getting to know you
/*
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn[2] = "Brooklyn";
*/

//Yell at the Ninja Turtles
/*
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i = 0; i<=ninjaTurtles.length-1; i++) {
   console.log(ninjaTurtles[i].toUpperCase());
}
*/

//Return of the Closets

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
//Alien Attire
let kristynsShoe = kristynsCloset.shift();

thomsCloset[2].push(kristynsShoe);

//Dress us up for Thom
console.log("Thom will wear a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][0]);
console.log("Thom will wear a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1]);
console.log("Thom will wear a " + thomsCloset[0][2] + ", " + thomsCloset[1][2] + ", and " + thomsCloset[2][2]);

//Dress us up for Kristyn
console.log("Kristyn will wear a " + kristynsCloset[0] + ", " + kristynsCloset[3] + ", and " + kristynsCloset[5]);
console.log("Kristyn will wear a " + kristynsCloset[1] + ", " + kristynsCloset[4] + ", and " + kristynsCloset[2]);
console.log("Kristyn will wear a " + kristynsCloset[2] + ", " + kristynsCloset[3] + ", and " + kristynsCloset[2]);

//LOOPS through closests
// Dirty laundry
for (i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

//Thom's inventory
console.log(thomsCloset[0] + thomsCloset[1] + thomsCloset[2]);















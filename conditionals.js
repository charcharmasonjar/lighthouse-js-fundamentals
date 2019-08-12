//if statements 

//example - what 2 wear 
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//example - temperature
const temperature = -44;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//logical operators 

//example - can u vote
const isCitizen = true;
const age = 99;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//example - should u go outside
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//example - should u bring umbrella
if (!raining) {
  console.log("Leave your umbrella at home!");
}
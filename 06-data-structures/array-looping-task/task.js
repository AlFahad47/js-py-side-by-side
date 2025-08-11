// array-looping-tasks

const colors = ["red", "blue", "green", "yellow", "orange"];
let reveresColors = [];
for (let color of colors) {
  reveresColors.unshift(color);
}
console.log(reveresColors);

let newReveresColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  newReveresColors.push(colors[i]);
}
console.log(newReveresColors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers = [];
for (let number of numbers) {
  if (number % 2 === 0) {
    newNumbers.push(number);
  }
}

console.log(newNumbers);

// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers2 = ["Tom", "Tim", "Tin", "Tik"];
let str = "";

for (let number of numbers2) {
  str += number;
}
console.log(str);

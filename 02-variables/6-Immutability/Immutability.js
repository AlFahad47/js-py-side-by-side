// Immutability	- const prevents reassignment but allows mutation of objects/arrays.

const myArray = [1, 2];
myArray.push(3); // Allowed
myArray[3] = 4; // Allowed
myArray = [2, 3]; // Error
console.log(myArray);

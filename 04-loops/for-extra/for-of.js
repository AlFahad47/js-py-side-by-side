// for...of

// Purpose: Iterates over the values of iterable objects (e.g., arrays, strings, maps, sets).
// Use case: When you need the elements of a collection, not their indices.

const fruits = ["apple", "banana", "orange", "lemon"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Compare with a traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const myName = "fahad molla";

for (let char of myName) {
  console.log(char);
}

// Note: Doesn’t provide direct access to indices. Use for...of with .entries() for index-value pairs.
console.log("for index-value pairs start:");
for (let [key, value] of fruits.entries()) {
  console.log(key, value);
}
// Output:
// 0 apple
// 1 banana
// 2 orange
// 3 lemon

// 2. for...in

// Purpose: Iterates over the enumerable properties (keys) of an object.
// Use case: Best for objects, not arrays (though it works with arrays, it’s not recommended due to potential issues with non-numeric properties).

const person = { name: "Alice", age: 24 };

console.log("for...in start:");
for (let key in person) {
  console.log(key, person[key]);
}

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
const warehouse = ["car", "bike", "computer"];
const warehouse2 = ["motor-cyclce", "honda"];
const newWarehouse = warehouse.concat(warehouse2);

console.log(newWarehouse);

// this not work in javascript but work in python
const wrongConcate = warehouse + warehouse2;
console.log(wrongConcate);

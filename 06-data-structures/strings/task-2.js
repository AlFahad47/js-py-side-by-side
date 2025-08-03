// Count how many times a string has the letter a or A
let str = "Fahad MollA";
let count = 0;

for (let char of str) {
  if (char.toLowerCase() === "a") {
    count++;
  }
}

console.log(count);

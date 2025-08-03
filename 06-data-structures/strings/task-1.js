// Count how many times a string has the letter a

let str = "Fahad MollA";
let count = 0;

for (let char of str) {
  if (char === "a") {
    count++;
  }
}

console.log(count);

// ✅ Variable Declarations and Scope
const name = "fahad"; // Block-scoped, constant — cannot be reassigned
let age = 25; // Block-scoped
var birth_year = "1997"; // Function-scoped (not block-scoped)

console.log(name, age); // Output: fahad 25
console.log(birth_year); // Output: 1997

// ✅ Block Scope with let (throws error if accessed outside)
if (true) {
  let a = 10;
}
// console.log(a); // ❌ ReferenceError: a is not defined

// ✅ Hoisting Behavior
console.log(x); // ✅ undefined — var is hoisted but initialized as undefined
var x = 5;

console.log(y); // ❌ ReferenceError — let is hoisted but in Temporal Dead Zone
let y = 6;

// ✅ Global Count Modified Inside Function
let count = 0;

function incrementGlobal() {
  count += 1; // Modifies global variable
}

incrementGlobal();
console.log(count); // Output: 1

// ✅ Local Count Shadows Global (No Effect Outside)
count = 0; // Resetting global count

function incrementLocal() {
  let count = 1; // Local variable shadows global
  console.log(count); // Output: 1 (local only)
}

incrementLocal();
console.log(count); // Output: 0 ❗️(global remains unchanged)

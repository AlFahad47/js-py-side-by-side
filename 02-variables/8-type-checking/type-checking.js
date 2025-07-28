let x = 10;
let y = "hello world";
let z = true;

let a;
let b = null;
let c = "";
let d = NaN;
console.log(typeof x); // number
console.log(typeof y); // string
console.log(typeof z); // boolean

console.log(typeof a); // undefined
console.log(typeof b); // objects (Historical bug)
console.log(typeof c); // strings
console.log(typeof d); // NaN is a number

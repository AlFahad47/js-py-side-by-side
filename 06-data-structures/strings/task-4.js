// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str = "xman yman Xoom Yoom XOOM";

while (str.includes("x")) {
  str = str.replace("x", "y");
}

while (str.includes("X")) {
  str = str.replace("X", "Y");
}

console.log(str);

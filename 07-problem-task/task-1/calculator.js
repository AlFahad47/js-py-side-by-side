function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multi(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation == "add") {
    return add(a, b);
  } else if (operation === "sub") {
    return sub(a, b);
  } else if (operation === "multi") {
    return multi(a, b);
  } else if (operation === "div") {
    return div(a, b);
  } else {
    console.log("wrong operation");
  }
}

const result = calculator(4, 6, "multi");
console.log(result);

// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const placesInDhaka = ["Lalbagh Fort", "Ahsan Manzil", "Dhaka University"];
const cityName = "Dhaka";
const currentTemperature = 32.5;
const isMonsoon = true;

function checkAndLogMessage(variable, name) {
  if (Array.isArray(variable)) {
    console.log(`The vaiable ${name} is an array.`);
  } else {
    console.log(`The vaiable ${name} is NOT! an array.`);
  }
}

checkAndLogMessage(placesInDhaka, "placesInDhaka");
checkAndLogMessage(cityName, "cityName");
checkAndLogMessage(currentTemperature, "currentTemperature");
checkAndLogMessage(isMonsoon, "isMonsoon");

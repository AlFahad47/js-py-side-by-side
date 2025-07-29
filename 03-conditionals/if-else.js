let age = 20;

if(age >= 18){
    console.log("Adult");
}
else if(age>= 13){
    console.log("Teen");
}

else {
    console.log("child")
}

// Truthy/Falsy: JavaScript evaluates conditions based on truthy (e.g., non-zero numbers, non-empty strings) and falsy values (0, "", null, undefined, false, NaN).

let value = ""

if( !value ) console.log("false value")


// Nested conditions

hasLicense = true

if( age>= 18){
    if(hasLicense){
        console.log("You can drive!")
    }
    else{
        console.log("Adult but can't drive")
    }
}
else{
    console.log("Too young to drive")
}
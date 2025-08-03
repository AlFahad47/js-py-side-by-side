let str = "Education";

str = str.toLowerCase();

let includeAllVowels = true;

let vowels = ["a", "e", "i", "o", "u"];
for (let vowel of vowels) {
  if (!str.includes(vowel)) {
    includeAllVowels = false;
    break;
  }
}

console.log(includeAllVowels);

// Whale talk assignment from Code Academy

// User phrase
var input = "What are you doing?";

// vowels whales can pronounce
var vowels = ["a", "e", "i", "o", "u"];

// Final array results
var resultArray = [];

// For loop to loop through user phrase
for (let i = 0; i < input.length; i++) {
  // Nested loop that loops thought vowels
  for (let j = 0; j < vowels.length; j++) {
    // Conditional statement comparing user input to the vowels
    if (input[i] === vowels[j]) {
      // Adds to resultArray
      resultArray.push(vowels[j]);
      //   Checks if the letter is e, if true doubles the letter
      if (input[i] === "e") {
        resultArray.push(input[i]);
      }
      //   Checks if the letter is u, if true doubles the letter
      if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray);
// Joins the resultArray into one string
var resultString = resultArray.join("").toUpperCase();

// Prints the final message out to user.
console.log(resultString);

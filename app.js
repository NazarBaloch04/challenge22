"use strict";
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30". 
// concating a string and a function
function combineStringAndNumber(text, number) {
    //   returns the value
    return text + number;
}
console.log(combineStringAndNumber("age: ", 30));
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. 
// Two numbers Division and its remainder
function twoNumbersDivision(num1, num2) {
    //  Returning the values
    return num1 % num2;
}
console.log(twoNumbersDivision(30, 7));
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
// This function sees if both inputs are true
function checkBothValuesTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothValuesTrue(true, true)); // Shows false
// It checks two things, but since one is false, the answer is false.
// This function sees if both inputs are true
function checkBothValuesFalse(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with false and true=][;'
console.log(checkBothValuesFalse(false, false)); // Shows false

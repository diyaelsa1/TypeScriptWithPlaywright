"use strict";
function reverseString(input) {
    let reversedStringOutput = "";
    const inputArray = input.split("");
    reversedStringOutput = inputArray.reverse().join("");
    return reversedStringOutput;
}
//let output:string=reverseString("Diya")
console.log(reverseString("Diya"));

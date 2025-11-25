"use strict";
function isEven(a) {
    if (a % 2 === 0) {
        return "Even number";
    }
    else {
        return "Odd number";
    }
}
let output = isEven(5);
console.log(output);

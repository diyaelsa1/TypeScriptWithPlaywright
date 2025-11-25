
function reverseString(input:string):string{
    let reversedStringOutput:string="";
    const inputArray=input.split("");
    reversedStringOutput = inputArray.reverse().join("");
    return reversedStringOutput
}


//let output:string=reverseString("Diya")
console.log(reverseString("Diya"))
//Declaring array
let arrayFormat1:string[]=['sff','dsd'];
// or using the Array generic type
let arrayFormat2: Array<number>=[556,78,6];

//Array functions
let empName:string[]=['Diya','David','Hira'];
let filetedNames:string[];
filetedNames=empName.filter(e=>e.startsWith('D'));
console.log(`Name starting with D - ${filetedNames}`);

filetedNames=empName.filter(e=>e.startsWith('H'));
console.log(`Name starting with H - ${filetedNames}`);


//printing array length
let usersk:string[]=['Ram','Sree']
console.log(usersk.length)
let empName:string[]=['Diya','David','Hira'];
let filetedNames:string[];
filetedNames=empName.filter(e=>e.startsWith('D'));
console.log(`Name starting with D - ${filetedNames}`);

filetedNames=empName.filter(e=>e.startsWith('H'));
console.log(`Name starting with H - ${filetedNames}`);
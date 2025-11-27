//.........................//
//------- TUPLE -----------//
//.........................//
let emp:[string,number,boolean?];
emp=['John',34,true]
console.log(`Employee Details -${emp}`)
emp=['John',34]
console.log(`Employee -${emp}`)

//---------------------labelled typle declaration ------------------------//
const empDetails:{name:string,age:number,mobile:number}={
    name:'David',
    age:34,
    mobile:89278917897
}
console.log(empDetails)

//--------------------passing a tuple to a function ---------------------//
function passTuple([name,age]:[string,number]):void{
  console.log(`Name is ${name} and age is ${age}`)
}
passTuple(['Diya',30])
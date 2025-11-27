function greet(name :string):string;
function greet(age: number):string;

function greet(value:string | number):string{

    if (typeof value=== "string"){
        return "Hello "+value;
    }else{
        return "You are "+value
    }

}

console.log(greet("Zira"));
console.log(greet(30));

//Note: overloading concept not same as java
//only one implementation is allowed !!!
//will have the flexibility to add multiple signature(declare functiom with different type)
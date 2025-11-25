function isEven(a:number):string{
    if (a% 2===0){
        return "Even number"
    }
    else{
        return "Odd number"
    }
}

let output:string=isEven(5)
console.log(output)
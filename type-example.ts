type credential={
    username: string,
    password:string
}


function getLoginCredentials(inputCred:credential):void{
    console.log(`Username is ${inputCred.username} and password is ${inputCred.password}`)
}

const cred:credential={username:"ABC",password:"Pass123"}
getLoginCredentials(cred)
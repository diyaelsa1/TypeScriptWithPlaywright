enum userRole{
    Admin='C021',
    Manager='M02',
    Employee='EMM'
}

function getRole(role:userRole):string{
    console.log(role)
    if(role === userRole.Admin){
        return "Access Provided"
    }else{
        return "No Access"
    }
}

console.log(getRole(userRole.Admin))
console.log(getRole(userRole.Manager))
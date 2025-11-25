
//Defining the structure of the user object as Iuser
interface Iuser{
    name: String,
    age:number,
    isAdmin?:boolean //optional
}

//Defining function to utilise the interface defined for user
function displayUserDetails(user:Iuser):void{
   console.log(`Logged in user is ${user.name} and age is ${user.age}`)
}

//assigning values to userInfo object & utilising the interface
const userInformation:Iuser={
   name:"Diya",
   age:30,
   isAdmin:true
};

//passing set values to function
displayUserDetails(userInformation)
"use strict";
//Defining function to utilise the interface defined for user
function displayUserDetails(user) {
    console.log(`Logged in user is ${user.name} and age is ${user.age}`);
}
//assigning values to userInfo object & utilising the interface
const userInformation = {
    name: "Diya",
    age: 30,
    isAdmin: true
};
//passing set values to function
displayUserDetails(userInformation);

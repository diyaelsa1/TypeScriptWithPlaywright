let credM = new Map<string,any>();

//ADD VALUES TO MAP
credM.set("StudentName","Dany");
credM.set("RollNumber",34);
console.log("Values stored in actual credM Map -")
console.log(credM);

//FETCH SPECIFIC KEY VALUE
console.log(credM.get("StudentName"))

//DELETE SPECIFIC VALUE
console.log(credM.delete('StudentName'))
console.log(credM);

//iterating over Maps
for (let [i,j] of credM.entries()){
    console.log(`${i}:${j}`)
}

//program -- To change the role number Dany to 16
console.log("Updating roll number of Dany to 16");
for(let [i,j] of credM.entries()){
    if(j==='Dany'){
        credM.set("RollNumber",16);
    }
}
console.log(credM);
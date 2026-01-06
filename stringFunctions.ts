let text:string="Test Playwright";
console.log(text.replaceAll("t","4"))           
console.log(text.toUpperCase())

//Looping over string of values
const language='Javascript,Python,Java';
const languages=language.split(",");
let count:number=0;
for ( const i of languages){
    console.log(i);
    if(i.toLowerCase().includes('java')){
        count=count+1
    }
}
console.log(`Java related ${count} languages found`)
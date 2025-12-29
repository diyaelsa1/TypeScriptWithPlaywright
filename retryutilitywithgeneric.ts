import { retry } from "./retry";

async function flakyOpertion() :Promise<string>{
    let randomValue:any =Math.random();
    console.log(randomValue);
    if(randomValue<0.7){
        throw new Error("Random Failure")
    }
    return "Success"
    
}

(async()=>{
    try{

     const output= await retry(flakyOpertion,5);//await is used as its a promise
     console.log(output);
    }catch(err){
        console.log(err);
    }
})();
   

function verifyStatus(status:'Pass'|'Fail'): Promise<string>{
    return new Promise(( resolve,reject)=>{
        console.log("Promise is in pending status...");
        setTimeout(()=>{
            if( status==='Pass'){
                return resolve("Successful Execution")
            }else{
                return reject("Unsuccessful Execution")
            }
        },5000);
    });
}


async function getExecutionStatus(executionStatus:'Pass'|'Fail'){
   try{
     console.log("Checking execution status!")
     const status=await verifyStatus(executionStatus);
     console.log(status)
   }catch(error){
    console.log(error);
   }
}

getExecutionStatus('Pass');
getExecutionStatus('Fail');
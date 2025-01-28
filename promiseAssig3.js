function fatchData(){
    return new Promise((resolve,reject)=>{
        let success = Math.random()>0.2;
        if(success){
            resolve("Data fetched successfully");
        }else{
            reject("Failed to fetch data");
        }
    });
}

fatchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
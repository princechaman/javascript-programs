function simulate(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Data received !!");
        },3000);
    });
}
simulate()
.then((data)=>{
    console.log(data);
})
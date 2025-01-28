function stepOne() {
    return new Promise((resolve)=>{
        resolve("Step one completed");
    });
}

function stepTwo() {
    return new Promise((resolve)=>{
        resolve("Step two completed");
    });
}

function stepThree() {
    return new Promise((resolve)=>{
        resolve("Step three completed");
    });
}
stepOne()
.then((data)=>{
    console.log(data);
    return stepTwo();
})
.then((data)=>{
    console.log(data);
    return stepThree();
})
.then((data)=>{
    console.log(data);
})

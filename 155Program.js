function squareRoot(num) {
    if(num<0){
        throw new Error("Nagetiv NUmber");
    }
    else{
        return Math.sqrt(num);
    }
}

let num = 16;
console.log(squareRoot(num));
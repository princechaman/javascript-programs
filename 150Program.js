function squareValue(num){
    if(typeof(num)==='number'){
        return num*num;
    }
    else{
        throw new Error("Input is not a number");
    }
}
let num = "a";
console.log(squareValue(num));
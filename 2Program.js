let num1 = 60;
let num2 = 40;
let num3 = 20;

let largest;

if(num1>num2 && num1>num3){
    largest = num1;
}else if(num2>num1 && num2>num3){
    largest = num2;
}
else{
    largest = num3;
}

console.log(largest);
let num =24;
let num1 = 36;
while(num1!=0){
    let temp = num1;
    num1 = num%num1;
    num = num1;
}
console.log(num);
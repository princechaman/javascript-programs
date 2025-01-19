let num =12345;
let digit = 0;
let temp = num;
while(num!=0){
    temp= num%10;
    digit+=1;
    num=parseInt(num/10);
}
console.log("number of digits :"+digit);
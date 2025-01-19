let num = 123;
let digit = 0,sum=0;
 while(num!=0){
    digit = num%10;
    sum+= digit*digit;
    num=Math.floor(num/10);
 }
 console.log(sum);
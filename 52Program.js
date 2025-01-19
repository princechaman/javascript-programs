let num = 1234;
let sum=0,digit=0;

while(num>0){
    digit=num%10;
    sum+=digit;
    num = Math.floor(num/10);
}
console.log(sum);
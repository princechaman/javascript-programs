let num = 19;
let sum=0,digit=0;
let temp = num;
while(temp>0){
    digit=temp%10;
    sum+=digit;
    temp = Math.floor(temp/10);
}
if(num%sum==0){
    console.log("divisible sum its num");
}else{
    console.log("Not Divisible sum its num");
}
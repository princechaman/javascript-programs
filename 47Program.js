let num = 212;
let rem,temp,sum=0;

temp = num;
while(temp>0){
    rem = temp%10;
    sum =sum*10+rem;
    temp=Math.floor(temp / 10);
}
if(num==sum){
   console.log("P");
}else{
    console.log("not P");
}
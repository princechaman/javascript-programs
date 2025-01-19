let num = 153;
let rem,temp,sum=0;

temp = num;
while(temp>0){
    rem = temp%10;
    sum +=rem*rem*rem;
    temp=Math.floor(temp / 10);;
}
if(num==sum){
   document.write("A");
}else{
   document.write("not A");
}

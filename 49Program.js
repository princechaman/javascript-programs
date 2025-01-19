let num =  145;
let temp,sum = 0,digit=0;

temp = num;
while(temp>0){
    digit = temp%10;
    let fect = 1;

    for(let i=1;i<=digit;i++){
        fect*=i;
    }
    sum+=fect;
    temp = Math.floor(temp/10);
}
if(sum==num){
    console.log("Strong Number");
}else{
    console.log("Not a Strong Number");
}

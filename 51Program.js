let prime=5,count=0;
for(let i=1;i<=prime;i++){
    if(prime%i==0){
        count++;
    }
}
if(count==2){
    console.log("prime");
}else{
    console.log("not prime");
}
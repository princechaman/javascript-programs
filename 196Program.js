for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        if((i+j)%2==0){
            document.write("1 &nbsp");
        }
        else{
            document.write("0 &nbsp");
        }
        
    }
    document.write("<br>");
}
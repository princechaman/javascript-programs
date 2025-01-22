for(var i=9;i>=2;i-=2){
    for(var j=1;j<=9-i;j++){
        document.write("&nbsp");
    }
    for(var j=1;j<=i;j++){
        document.write("*");
        
    }
    document.write('</br>');
}
for(var i=1;i<=9;i+=2){
    for(var j=1;j<=9-i;j++){
        document.write("&nbsp");
    }
    for(var j=1;j<=i;j++){
        document.write("*");
        
    }
    document.write('</br>');
}
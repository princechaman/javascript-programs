let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=5; j++) {
        if(i==5||j==1||i==1){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}
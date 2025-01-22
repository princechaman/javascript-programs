let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=5; j++) {
        if(j==5||i==5||i==1||j==2){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}
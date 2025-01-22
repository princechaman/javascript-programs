let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=9; j++) {
        if(j==4+i||j==6-i||(i==3&&(j>=6-i&&j<=4+i))){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}

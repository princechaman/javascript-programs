let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=9; j++) {
        if(i==5||j==4+i||j==6-i){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}

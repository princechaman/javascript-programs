let i,j;
for (let i = 1; i<=9; i++) {
    let row = "";
    for (let j = 1; j <=9; j++) {
        if(i==1||j==10-i||j==i||i==9){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row)
}

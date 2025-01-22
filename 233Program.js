let i,j;
for (let i = 1; i<=9; i++) {
    let row = "";
    for (let j = 1; j <=9; j++) {
        if(j==10-i||j==i){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row)
}

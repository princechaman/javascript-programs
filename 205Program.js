let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=9; j++) {
        if(i==1){
            row += j;
        }
        else if(j==10-i||j==i){
            row += "1";
        }
        else{
            row += " ";
        }
    }
    console.log(row)
}

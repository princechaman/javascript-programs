let i,j;
for (let i = 1; i<=6; i++) {
    let row = "";
    for (let j = 1; j <=5; j++) {
        if(j==1||(i<=3 && j==6-i)||(i>3&&j==i-1)){
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}
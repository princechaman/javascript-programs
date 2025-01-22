let i,j;
for (let i = 1; i <=9; i++) {
    let row ="";
    for (let j = 1; j <=9; j++) {
        if ((j==4+i || j==6-i)&&i<=4){
            row += "*";
        }else if(i>4&&(j==i-4||j==14-i)){
            row += "*";
        }
        else{
            row += " ";
        }
        }
        console.log(row);
    }

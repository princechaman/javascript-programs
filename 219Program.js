let i,j;
for (let i = 1; i<=5; i++) {
    let row = "";
    for (let j = 1; j <=5; j++) {
        if (i=== 1 || j==3 ||(i==5 && j<=3) ||(i==4 && j==1))
        {
            row += "*";
        }else{
            row += " ";
        }
    }
    console.log(row)
}
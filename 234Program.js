for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <=rows; j++) {
        if ((i<=3&&(j==i||j==6-i))||(i>3&&j==3)) {
        row += "* ";
        }
        else
        row += "  ";
    }
    console.log(row);
}
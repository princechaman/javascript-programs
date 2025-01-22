for (let i = 1; i <= 7; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        if (j=== 1 || ((i ===1 | i === 4)&&j<4) ||((i==2||i==3)&&j==4)) {
        row += "* ";
        }
        else
        row += "  ";
    }
    console.log(row);
}
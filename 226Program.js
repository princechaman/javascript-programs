let i, j;
for (let i = 1; i <= 5; i++) { 
    let row = "";
    for (let j = 1; j <= 7; j++) {
        if (
            (i === 1 && j > 1 && j < 5) || 
            (i === 5 && j > 1 && j < 5) || 
            (j === 1 && i > 1 && i < 5) || 
            (j === 5 && i > 1 && i < 5) || 
            (i === 4 && j === 4)           
        ) {
            row += "*";
        } else {
            row += " ";
        }
    }
   

    console.log(row);
}
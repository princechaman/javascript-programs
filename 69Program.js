let n = 5; 

for (let i = 0; i < n; i++) {
    let number = 1; 
    let row = ""; 

    for (let j = 0; j <= i; j++) {
        row += number + " "; 
        number = (number * (i - j)) / (j + 1); 
    }

    console.log(row.trim()); 
}
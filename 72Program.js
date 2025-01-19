let decimal = 10; 
let binary = ""; 

function binarynumber(d) {
    let binary = ""; 
    while (d > 0) {
        binary = (d % 2) + binary; 
        d = Math.floor(d / 2);
    }
    return binary; 
}

binary = binarynumber(decimal); 
console.log(binary);
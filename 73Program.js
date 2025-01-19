let a = 2; 
let r = 3; 
let n = 4; 

function geometricTerm(a, r, n) {
    if (n === 1) {
        return a; 
    }
    return r * geometricTerm(a, r, n - 1); 
}

let result = geometricTerm(a, r, n); 
console.log(result); 
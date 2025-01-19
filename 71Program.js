let num = 9875; 

while (num >= 10) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; 
        num = Math.floor(num / 10); 
    }
    num = sum; 
}

console.log(num);
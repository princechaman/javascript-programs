let num1 = 48;
let num2 = 18;

function gcd(a,b){
    if(b===0){
        return a;
    }
    return gcd(b,a%b);
}
console.log(gcd(num1,num2));
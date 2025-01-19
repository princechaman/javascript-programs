let fibonacci = function(n){
    if(n<=1){
        return  n;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
let result = [];
for (let i = 0; i <= 5; i++) { 
    result.push(fibonacci(i));
}

console.log(result);
let fect = function fectorial(n){
    if(n==0){
        return 1;
    }else{
        return n*fectorial(n-1);
    }
}

let result = fect(5);
console.log(result);
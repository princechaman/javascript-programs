function convertString(str) {
    if(typeof str ==="string"){
        return str.toUpperCase();
    }
    else{
       throw new Error("Not a String");
    }   
}

let str = "sonu";
console.log(convertString(str));